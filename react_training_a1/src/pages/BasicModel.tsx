const BasicModel = () => {

  // 型と値を同時に設定する
  // const text: string = "Hello";
  // const price: number = 1200;
  // const isDone: boolean = true;
  // const userName: string | null = null;
  // const lastLogin: string | undefined = undefined;

  // 型を設定してから値を代入する
  let text: string;
  let price: number;
  let isDone: boolean;
  let userName: string | null;
  let lastLogin: string | undefined;

  text = "Hello";
  price = 1200;
  isDone = true;
  userName = null;
  lastLogin = undefined;

  return (
    <>
      <h2>基本型（string / number / boolean / null / undefined）</h2>
      <ul className="ul-list text">
        <li>string: {text}</li>
        <li>number: {price}</li>
        <li>boolean: {isDone ? "Done" : "Not Done"}</li>
        <li>null: {userName === null ? "No user logged in" : userName}</li>
        <li>undefined: {lastLogin === undefined ? "Last login unknown" : lastLogin}</li>
      </ul>
    </>
  );
};
export default BasicModel;
