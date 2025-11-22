
const Object = () => {

  // 型の定義　通常はintercfaceを使うことが多い
  interface User {
    name: string;
    age: number;
    isAdmin: boolean;
  }
  // 型定義と一緒に変数を設定する
  let user: User = {
    name: "太郎",
    age: 25,
    isAdmin: false
  };

  return (
    <>
      <h2>オブジェクト</h2>
      <p className="text">
        オブジェクトは、複数のプロパティを持つデータ構造です。各プロパティはキーと値のペアで構成されます。上記の例では、userオブジェクトがname、age、isAdminという3つのプロパティを持っています。string / number / boolean / null / undefinedをそれぞれに設定できる。
      </p>
      <pre className="text">{JSON.stringify(user, null, 2)}</pre>

      {/* <ul className="ul-list">
        <li>string: {text}</li>
        <li>number: {price}</li>
        <li>boolean: {isDone ? "Done" : "Not Done"}</li>
        <li>null: {userName === null ? "No user logged in" : userName}</li>
        <li>undefined: {lastLogin === undefined ? "Last login unknown" : lastLogin}</li>
      </ul> */}
    </>
  );
};
export default Object;
