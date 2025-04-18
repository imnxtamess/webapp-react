export default function AlertBanner({ text, name }) {
  return (
    <>
      {!text ? (
        <div className="btn btn-danger">
          The review needs to be atleast 3 characters long!
        </div>
      ) : null}
      {!name ? (
        <div className="btn btn-danger">
          Your name needs to be atleast 2 characters long!
        </div>
      ) : null}
    </>
  );
}
