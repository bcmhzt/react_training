
const AliasInterface = () => {

  // 基本的な使い方
  type UserID = string | number;
  type Status = "active" | "inactive" | "pending";

  // オブジェクト型
  // type User = {
  //   id: UserID;
  //   name: string;
  //   status: Status;
  // };

  // // 関数型
  // type Callback = (data: string) => void;

  // // 交差型（&）
  // type Admin = User & {
  //   role: "admin";
  //   permissions: string[];
  // };

  // 基本的な使い方
  // interface User {
  //   id: number;
  //   name: string;
  //   email: string;
  // }

  // 拡張（extends）
  // interface Admin extends User {
  //   role: "admin";
  //   permissions: string[];
  // }

  // // 複数継承
  // interface Editor extends User, Timestamped {
  //   canEdit: boolean;
  // }

  // interface Timestamped {
  //   createdAt: Date;
  //   updatedAt: Date;
  // }

  return (
    <>
      <h2>Type alias / Interface（エイリアス / インターフェイス）</h2>
      <p className="text">
      </p>
      {/* <pre className="text">{JSON.stringify(User, null, 2)}</pre> */}


    </>
  );
};
export default AliasInterface;
