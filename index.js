const Notification = (props) => {
  const { className, iconUrl, message } = props;
  const containerClassName = `notification-container ${className}`;

  return (
    <div className={containerClassName}>
      <img className="image" src={iconUrl} />
      <p className="message">{message}</p>
    </div>
  );
};

const element = (
  <div className="container">
    <h1 className="tittle">Notifications</h1>
    <div className="notifications-container">
      <Notification
        className="notify-1"
        iconUrl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        message="Information Message"
      />
      <Notification
        className="notify-2"
        iconUrl="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        message="Success Message"
      />
      <Notification
        className="notify-3"
        iconUrl="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        message="Warning Message"
      />
      <Notification
        className="notify-4"
        iconUrl="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        message="Error Message"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
