import API, { graphqlOperation } from "@aws-amplify/api";
import { csvToDB } from "graphql/mutations";
import { generateAccountTransactionsFromURL } from "graphql/otherServices";
import React, { useState, useEffect } from "react";
import Accordion from "react-bootstrap/accordion";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import * as queries from "../graphql/queries";
import { groupBy } from "../core/helper";

const Categories = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [data, setData] = useState([]);
  const currentProjectId = useSelector(
    // @ts-ignore
    (state) => state.userState.currentProject
  );
  const user = useSelector((state) => state.userState.user);
  let filter = { projectID: { eq: currentProjectId } };

  const loadAccounts = async () => {
    const {
      data: {
        listAccounts: { items },
      },
    } = await API.graphql({
      query: queries.listAccounts,
      variables: { filter: filter },
    });
    setData(groupBy(items, (item) => item.category));
  };

  useEffect(() => {
    loadAccounts();
  }, []);

  const categories = {
    COST_OF_GOOD_SOLD: "Cost of Good Sold",
    CAPITAL: "Capital",
    CURRENT_ASSETS: "Current Assets",
    EXPENSES: "Expenses",
  };

  return (
    <div>
      {data.map((item, index) => (
        <Accordion key={index} defaultActiveKey="0" className="pt-6">
          <Accordion.Item eventKey="0">
            <Accordion.Header className="bg-white border-0 flex">
              <div className="flex justify-between pr-4 w-100">
                <div className="text-xl font-medium">
                  {categories[item.name]}
                </div>
                <div className="mb-0 align-self-center">2 items</div>
              </div>
            </Accordion.Header>
            <Accordion.Body className="flex flex-col align-items-start">
              {item.items &&
                item.items.map((subItem, subIndex) => (
                  <div
                    key={subIndex}
                    className="underline py-0.5 cursor-pointer"
                    onClick={() => {
                      history.push({
                        pathname: "/Accounts/" + subItem.name + "/upload",
                        // pathname: "/Accounts/" + subItem.name,
                        state: {
                          account: subItem,
                          // category: categories[item.name],
                        },
                      });
                    }}
                  >
                    {subItem.name}
                  </div>
                ))}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      ))}
    </div>
  );
};
export default Categories;
