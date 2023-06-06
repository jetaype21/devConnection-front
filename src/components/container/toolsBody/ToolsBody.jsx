import styles from "./body.module.css";
import Featured from "../../smallComponents/featured/Featured";
import { useEffect, useState } from "react";
import featureds from "../../../assets/featured";
import { DataAuth } from "../../../context/authContext";
import { useLocation } from "react-router-dom";
import ButtonFilter from "./ButtonFilter";
import CardTools from "./CardTools";

const ToolsBody = () => {
  // const { tools } = DataAuth();

  const tools = [
    {
      category_name: "Cortadorass",
      category_slug: "cortadoras",
      _id: "1",
      category_tools: [
        {
          tool_image:
            "https://www.bing.com/th/id/OIP.akV9KjAtdaROFei8n8dnowHaHw?w=163&h=180&c=7&r=0&o=5&pid=1.7",
          tool_name: "Canva 1",
          tool_description:
            "Herramienta de diseño gráfico en línea con plantillas y herramientas d…",
          tool_link: "https://www.canva.com/",
          tool_status: true,
        },
        {
          tool_image:
            "https://www.bing.com/th/id/OIP.akV9KjAtdaROFei8n8dnowHaHw?w=163&h=180&c=7&r=0&o=5&pid=1.7",
          tool_name: "Canva 1",
          tool_description:
            "Herramienta de diseño gráfico en línea con plantillas y herramientas d…",
          tool_link: "https://www.canva.com/",
          tool_status: true,
        },
        {
          tool_image:
            "https://www.bing.com/th/id/OIP.akV9KjAtdaROFei8n8dnowHaHw?w=163&h=180&c=7&r=0&o=5&pid=1.7",
          tool_name: "Canva 1",
          tool_description:
            "Herramienta de diseño gráfico en línea con plantillas y herramientas d…",
          tool_link: "https://www.canva.com/",
          tool_status: false,
        },
      ],
    },
    {
      category_name: "Cortadorasss",
      category_slug: "cortadorass",
      _id: "2",
      category_tools: [
        {
          tool_image:
            "https://www.bing.com/th/id/OIP.akV9KjAtdaROFei8n8dnowHaHw?w=163&h=180&c=7&r=0&o=5&pid=1.7",
          tool_name: "Canva 2",
          tool_description:
            "Herramienta de diseño gráfico en línea con plantillas y herramientas d…",
          tool_link: "https://www.canva.com/",
          tool_status: true,
        },
        {
          tool_image:
            "https://www.bing.com/th/id/OIP.akV9KjAtdaROFei8n8dnowHaHw?w=163&h=180&c=7&r=0&o=5&pid=1.7",
          tool_name: "Canva 2",
          tool_description:
            "Herramienta de diseño gráfico en línea con plantillas y herramientas d…",
          tool_link: "https://www.canva.com/",
          tool_status: true,
        },
        {
          tool_image:
            "https://www.bing.com/th/id/OIP.akV9KjAtdaROFei8n8dnowHaHw?w=163&h=180&c=7&r=0&o=5&pid=1.7",
          tool_name: "Canva 2",
          tool_description:
            "Herramienta de diseño gráfico en línea con plantillas y herramientas d…",
          tool_link: "https://www.canva.com/",
          tool_status: false,
        },
      ],
    },
    {
      category_name: "Cortadorasssss",
      category_slug: "cortadoraaass",
      _id: "3",
      category_tools: [
        {
          tool_image:
            "https://www.bing.com/th/id/OIP.akV9KjAtdaROFei8n8dnowHaHw?w=163&h=180&c=7&r=0&o=5&pid=1.7",
          tool_name: "Canva 3",
          tool_description:
            "Herramienta de diseño gráfico en línea con plantillas y herramientas d…",
          tool_link: "https://www.canva.com/",
          tool_status: true,
        },
        {
          tool_image:
            "https://www.bing.com/th/id/OIP.akV9KjAtdaROFei8n8dnowHaHw?w=163&h=180&c=7&r=0&o=5&pid=1.7",
          tool_name: "Canva 3",
          tool_description:
            "Herramienta de diseño gráfico en línea con plantillas y herramientas d…",
          tool_link: "https://www.canva.com/",
          tool_status: true,
        },
        {
          tool_image:
            "https://www.bing.com/th/id/OIP.akV9KjAtdaROFei8n8dnowHaHw?w=163&h=180&c=7&r=0&o=5&pid=1.7",
          tool_name: "Canva 3",
          tool_description:
            "Herramienta de diseño gráfico en línea con plantillas y herramientas d…",
          tool_link: "https://www.canva.com/",
          tool_status: false,
        },
      ],
    },
  ];

  // const [selects, setSelects] = useState([]);
  // const limit = Math.floor(Math.random() * 7);
  // let select = selects.splice(limit, 2);
  // // console.log(select);

  // useEffect(() => {
  //   setSelects(featureds);
  // }, []);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const category = searchParams.get("category");
  const categorySelect = tools.find((tool) => tool.category_slug === category);

  return (
    <section className={styles.container}>
      <section className={styles.container__content}>
        <article>
          <h5>Filtros:</h5>
          {tools &&
            tools.map((tool) => (
              <ButtonFilter
                key={tool._id}
                category_name={tool.category_name}
                category_slug={tool.category_slug}
                category_active={category}
              />
            ))}
        </article>

        {categorySelect ? (
          <article>
            <h2>{categorySelect.category_name}</h2>
            <CardTools tools={categorySelect.category_tools} />
          </article>
        ) : (
          tools.map((tool) => (
            <article>
              <h2>{tool.category_name}</h2>
              <CardTools tools={tool.category_tools} />
            </article>
          ))
        )}

        <article className={styles.container_featured}>
          {/* <Featured items={select} /> */}
        </article>
      </section>
    </section>
  );
};

export default ToolsBody;
