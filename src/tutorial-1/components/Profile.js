import React from "react";

// ФУНКЦИАНАЛЬНЫЙ
// function Profile(props) {
//   const firstName = props.name.split(" ");
//   const date = props.registredAt
//     .toLocaleString("ru", {
//       year: "numeric",
//       month: "long",
//       day: "numeric",
//     })
//     .slice(0, -3);
//   return (
//     <div className="profile_block">
//       <p>
//         Привет, <b>{firstName[0]}!</b>
//       </p>
//       <p>Дата регистрации: {date}</p>
//     </div>
//   );
// }

//КЛАССОВЫЙ
class Profile extends React.Component {
  render() {
    const firstName = this.props.name.split(" ");
    const date = this.props.registredAt
      .toLocaleString("ru", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
      .slice(0, -3);
    return (
      <div className="profile_block">
        <p>
          Привет, <b>{firstName[0]}!</b>
        </p>
        <p>Дата регистрации: {date}</p>
      </div>
    );
  }
}

export default Profile;
