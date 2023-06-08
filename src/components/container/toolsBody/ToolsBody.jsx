import styles from "./body.module.css";
import { useEffect } from "react";
import { DataAuth } from "../../../context/authContext";
import { useLocation } from "react-router-dom";
import ButtonFilter from "./ButtonFilter";
import CardTools from "../../smallComponents/cardTools/CardTools";
import { helpHttp } from "../../../utils/helpHttp";
import { baseApiUrl } from "../../../utils/keysSession";

const ToolsBody = () => {
  const { tools, setTools } = DataAuth();
  const { get } = helpHttp();

  // const tools = [
  //   {
  //     category_name: "Cortadorass",
  //     category_slug: "cortadoras",
  //     _id: "1",
  //     category_tools: [
  //       {
  //         tool_image:
  //           "https://www.bing.com/th/id/OIP.akV9KjAtdaROFei8n8dnowHaHw?w=163&h=180&c=7&r=0&o=5&pid=1.7",
  //         tool_name: "Canva 1",
  //         tool_description:
  //           "Herramienta de diseño gráfico en línea con plantillas y herramientas d…",
  //         tool_link: "https://www.canva.com/",
  //         tool_status: true,
  //       },
  //       {
  //         tool_image:
  //           "https://www.bing.com/th/id/OIP.akV9KjAtdaROFei8n8dnowHaHw?w=163&h=180&c=7&r=0&o=5&pid=1.7",
  //         tool_name: "Canva 1",
  //         tool_description:
  //           "Herramienta de diseño gráfico en línea con plantillas y herramientas d…",
  //         tool_link: "https://www.canva.com/",
  //         tool_status: true,
  //       },
  //       {
  //         tool_image:
  //           "https://www.bing.com/th/id/OIP.akV9KjAtdaROFei8n8dnowHaHw?w=163&h=180&c=7&r=0&o=5&pid=1.7",
  //         tool_name: "Canva 1",
  //         tool_description:
  //           "Herramienta de diseño gráfico en línea con plantillas y herramientas d…",
  //         tool_link: "https://www.canva.com/",
  //         tool_status: false,
  //       },
  //     ],
  //   },
  //   {
  //     category_name: "Cortadorasss",
  //     category_slug: "cortadorass",
  //     _id: "2",
  //     category_tools: [
  //       {
  //         tool_image:
  //           "https://www.bing.com/th/id/OIP.akV9KjAtdaROFei8n8dnowHaHw?w=163&h=180&c=7&r=0&o=5&pid=1.7",
  //         tool_name: "Canva 2",
  //         tool_description:
  //           "Herramienta de diseño gráfico en línea con plantillas y herramientas d…",
  //         tool_link: "https://www.canva.com/",
  //         tool_status: true,
  //       },
  //       {
  //         tool_image:
  //           "https://www.bing.com/th/id/OIP.akV9KjAtdaROFei8n8dnowHaHw?w=163&h=180&c=7&r=0&o=5&pid=1.7",
  //         tool_name: "Canva 2",
  //         tool_description:
  //           "Herramienta de diseño gráfico en línea con plantillas y herramientas d…",
  //         tool_link: "https://www.canva.com/",
  //         tool_status: true,
  //       },
  //       {
  //         tool_image:
  //           "https://www.bing.com/th/id/OIP.akV9KjAtdaROFei8n8dnowHaHw?w=163&h=180&c=7&r=0&o=5&pid=1.7",
  //         tool_name: "Canva 2",
  //         tool_description:
  //           "Herramienta de diseño gráfico en línea con plantillas y herramientas d…",
  //         tool_link: "https://www.canva.com/",
  //         tool_status: false,
  //       },
  //     ],
  //   },
  //   {
  //     category_name: "Cortadorasssss",
  //     category_slug: "cortadoraaass",
  //     _id: "3",
  //     category_tools: [
  //       {
  //         tool_image:
  //           "https://www.bing.com/th/id/OIP.akV9KjAtdaROFei8n8dnowHaHw?w=163&h=180&c=7&r=0&o=5&pid=1.7",
  //         tool_name: "Canva 3",
  //         tool_description:
  //           "Herramienta de diseño gráfico en línea con plantillas y herramientas d…",
  //         tool_link: "https://www.canva.com/",
  //         tool_status: true,
  //       },
  //       {
  //         tool_image:
  //           "https://www.bing.com/th/id/OIP.akV9KjAtdaROFei8n8dnowHaHw?w=163&h=180&c=7&r=0&o=5&pid=1.7",
  //         tool_name: "Canva 3",
  //         tool_description:
  //           "Herramienta de diseño gráfico en línea con plantillas y herramientas d…",
  //         tool_link: "https://www.canva.com/",
  //         tool_status: true,
  //       },
  //       {
  //         tool_image:
  //           "https://www.bing.com/th/id/OIP.akV9KjAtdaROFei8n8dnowHaHw?w=163&h=180&c=7&r=0&o=5&pid=1.7",
  //         tool_name: "Canva 3",
  //         tool_description:
  //           "Herramienta de diseño gráfico en línea con plantillas y herramientas d…",
  //         tool_link: "https://www.canva.com/",
  //         tool_status: true,
  //       },
  //       {
  //         tool_image:
  //           "https://www.bing.com/th/id/OIP.akV9KjAtdaROFei8n8dnowHaHw?w=163&h=180&c=7&r=0&o=5&pid=1.7",
  //         tool_name: "Canva 3",
  //         tool_description:
  //           "Herramienta de diseño gráfico en línea con plantillas y herramientas d…",
  //         tool_link: "https://www.canva.com/",
  //         tool_status: true,
  //       },
  //       {
  //         tool_image:
  //           "https://www.bing.com/th/id/OIP.akV9KjAtdaROFei8n8dnowHaHw?w=163&h=180&c=7&r=0&o=5&pid=1.7",
  //         tool_name: "Canva 3",
  //         tool_description:
  //           "Herramienta de diseño gráfico en línea con plantillas y herramientas d…",
  //         tool_link: "https://www.canva.com/",
  //         tool_status: false,
  //       },
  //     ],
  //   },
  // ];

  // useEffect(() => {

  // }, [])

  useEffect(() => {
    !tools &&
      get(`${baseApiUrl}/tools`).then((tools) => {
        setTools(tools.data.data);
      });
  }, []);

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

        {tools.length === 0 && <h2>Cargando herramientas</h2>}

        {categorySelect ? (
          <article className={styles.container_featured}>
            <h2>{categorySelect.category_name}</h2>
            <p>{categorySelect.category_description}</p>
            <CardTools tools={categorySelect.category_tools} />
          </article>
        ) : (
          tools.map((tool) => (
            <article className={styles.container_featured}>
              <h2>{tool.category_name}</h2>
              <p>{tool.category_description}</p>
              <CardTools tools={tool.category_tools} />
              {/* <Featured items={select} /> */}
            </article>
          ))
        )}
      </section>
    </section>
  );
};

export default ToolsBody;
