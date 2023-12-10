import { Fragment } from "react";

import professionAttribute from "./assets/professionAttribute.json";

const battleAttributeOrder = [
  { key: "health", label: "生命值", iconSrc: "./assets/imgs/Health.webp" },
  {
    key: "meleeSkill",
    label: "近战技能",
    iconSrc: "./assets/imgs/Melee_skill.webp",
  },
  {
    key: "rangeSkill",
    label: "远程技能",
    iconSrc: "./assets/imgs/Ranged_skill.webp",
  },
  {
    key: "meleeDefense",
    label: "近战防御",
    iconSrc: "./assets/imgs/Melee_defense.webp",
  },
  {
    key: "rangedDefense",
    label: "远程防御",
    iconSrc: "./assets/imgs/Ranged_defense.webp",
  },
  {
    key: "fatigue",
    label: "疲劳",
    iconSrc: "./assets/imgs/Fatigue.webp",
  },
  {
    key: "resolve",
    label: "决心",
    iconSrc: "./assets/imgs/Resolve.webp",
  },
  {
    key: "initiative",
    label: "主动值",
    iconSrc: "./assets/imgs/Initiative.webp",
  },
];

export function App() {
  return (
    <section className="font-bold">
      <Foo />
    </section>
  );
}

function Foo() {
  return (
    <section>
      <table className="w-full">
        <thead className="border-b">
          <tr>
            <th>背景</th>
            {battleAttributeOrder.map((attribute) => (
              <Fragment key={attribute.key}>
                <th>
                  <img
                    src={attribute.iconSrc}
                    alt={attribute.label}
                    key={attribute.key}
                  />
                </th>
                <th colSpan={2}>
                  <p>{attribute.label}</p>
                  <div className="flex justify-between gap-2">
                    <p>上限</p>
                    <p>下限</p>
                  </div>
                </th>
              </Fragment>
            ))}
            <th>初始等级</th>
            <th>基础日薪</th>
            <th>额外特性</th>
          </tr>
        </thead>
        <tbody>
          {(professionAttribute as any[]).map((attribute) => (
            <tr className="border-b" key={attribute.background}>
              <td>{attribute.background}</td>
              {battleAttributeOrder.map(({ key }) => (
                <Fragment key={key}>
                  <td>{attribute[key].isGrowable ? "*" : ""}</td>
                  <td>{attribute[key].min}</td>
                  <td>{attribute[key].max}</td>
                </Fragment>
              ))}
              <td>{attribute.initialLevel}</td>
              <td>{attribute.baseDailySalary}</td>
              <td>{attribute.additionalFeatures}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
