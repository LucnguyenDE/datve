import React from "react";
import chair_list from "../danhSachGhe.json";
import { add } from "../features/information/informationSlice";
import { useDispatch } from "react-redux";
import { disableButton } from "./disableButton";
export default function ChooseChair() {
  const dispatch = useDispatch();
  const handleSendInFor = (object) => {
    dispatch(add(object));
  };
  const handleChooseChair = (e) => {
    disableButton(e, true);
  };
  return (
    <div className="choose_part flex flex-col items-center col-span-7">
      <h1 className="text-4xl text-amber-400 font-bold">
        ĐẶT VÉ XEM PHIM CYBERLEARN
      </h1>
      <h3 className="text-1xl text-white">Màn hình</h3>
      <div className="screen mb-4" />
      <table className="chair w-3/4 text-white">
        <tbody>
          {chair_list.map((item) => {
            return (
              <tr key={item.hang}>
                <td className="text-amber-300 font-bold">{item.hang}</td>
                {item.hang === ""
                  ? item.danhSachGhe.map((ghe, index) => {
                      return (
                        <td
                          key={ghe.soGhe}
                          className="text-amber-300 font-bold"
                        >
                          <span className="pl-3">{index + 1}</span>
                        </td>
                      );
                    })
                  : item.danhSachGhe.map((ghe, index) => {
                      return (
                        <td key={ghe.soGhe}>
                          <button
                            id={ghe.soGhe}
                            className="w-8 h-8 bg-white border-4 border-amber-600 rounded text-black"
                            onClick={(e) => {
                              handleSendInFor({
                                name: ghe.soGhe,
                                price: ghe.gia,
                              });
                              handleChooseChair(e);
                            }}
                          >
                            {index + 1}
                          </button>
                        </td>
                      );
                    })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
//thêm chức năng lắng nghe sự kiện click trên màn hình, nếu tagName là 1 button
// thì hiện bảng thông báo: Confirm Chair
