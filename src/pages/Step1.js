import React, { Component, useEffect } from "react";
import Accordion from "react-bootstrap/accordion";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const Step1 = () => {
  const history = useHistory();
  // @ts-ignore
  const user = useSelector((state) => state.userState.user);
  const CreateProjectInput = {
    projectName: "Todo 1",
    owner: user.attributes.sub,
  };

  const allTodos = async () => {
    // const newTodo = await API.graphql({
    //   query: mutations.createProject,
    //   variables: { input: CreateProjectInput },
    // });

    console.log(data);
  };

  useEffect(() => {
    allTodos();
  }, []);
  const data = [
    {
      name: "Sales",
      items: ["Sales", "Return Inwards"],
      link: "sales",
    },
    {
      name: "Cost of Goods Sold",
      items: ["Inventory", "Purchases"],
    },
  ];
  return (
    <div>
      {data.map((item, index) => (
        <Accordion key={index} defaultActiveKey="0" className="pt-6">
          <Accordion.Item eventKey="0">
            <Accordion.Header className="bg-white border-0 flex">
              <div className="flex justify-between pr-4 w-100">
                <div className="text-xl font-medium">{item.name}</div>
                <div className="mb-0 align-self-center">2 items</div>
              </div>
            </Accordion.Header>
            <Accordion.Body className="flex flex-col align-items-start">
              {item.items.map((subItem, subIndex) => (
                <div
                  key={subIndex}
                  className="underline py-0.5 cursor-pointer"
                  onClick={() => history.push("/sales")}
                >
                  {subItem}
                </div>
              ))}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      ))}
    </div>
  );
};
export default Step1;
