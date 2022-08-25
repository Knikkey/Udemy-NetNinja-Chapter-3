import "./Title.css";

export default function Title(props) {
  return (
    <div className="title-block">
      <h1 className="title">{props.title}</h1>
      <br />
      <h2 className="subtitle">{props.subtitle}</h2>
    </div>
  );
}

//Destructuring example
// export default function Title({title, subtitle}) {
//     return (
//       <div>
//         <h1 className="title">{title}</h1>
//         <br />
//         <h2 className="subtitle">{subtitle}</h2>
//       </div>
//     );
//   }
