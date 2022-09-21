import React from "react";
import {
  selectInformation,
  remove,
} from "../features/information/informationSlice";
import { useSelector, useDispatch } from "react-redux";
import { disableButton } from "./disableButton";

export default function ChooseInformation() {
  const information = useSelector(selectInformation);
  const dispatch = useDispatch();
  const totalPrice = information.map((chair) => chair.price).reduce(getSum, 0);
  const handleCancleChair = (e) => {
    const chair_remove = e.currentTarget.dataset.name;
    const index_remove = information.findIndex((chair) => {
      return chair.name === chair_remove;
    });
    dispatch(remove(index_remove));
    disableButton(e, false);
  };
  return (
    <div className="list col-span-3">
      <h1 className="text-4xl text-white font-bold font-medium">
        DANH SÁCH GHẾ BẠN CHỌN
      </h1>
      <div className="note space-y-3 py-5">
        <div className="flex space-x-2">
          <div className="orange w-5 h-5 bg-rose-600" />
          <p className="text-1xl text-white">Ghế đã đặt</p>
        </div>
        <div className="flex space-x-2">
          <div className="green w-5 h-5 bg-green-400" />
          <p className="text-1xl text-white">Ghế đang chọn</p>
        </div>
        <div className="flex space-x-2">
          <div className="white w-5 h-5 bg-white" />
          <p className="text-1xl text-white">Ghế chưa đặt</p>
        </div>
      </div>
      <div>
        <table className="border-collapse border-white border w-full text-white">
          <thead>
            <tr>
              <td className="border-white border pl-1 font-medium">Số ghế</td>
              <td className="border-white border pl-1 font-medium">Giá tiền</td>
              <td className="border-white border pl-1 font-medium">Hủy</td>
            </tr>
          </thead>
          <tbody>
            {information.length === 0 ? (
              <></>
            ) : (
              information.map((chair) => {
                return (
                  <tr key={chair.name}>
                    <td className="border-white border pl-1 text-amber-400 font-medium">
                      {chair.name}
                    </td>
                    <td className="border-white border pl-1 text-amber-400 font-medium">
                      {chair.price}
                    </td>
                    <td className="border-white border pl-1 text-amber-400 font-medium">
                      <button
                        data-name={chair.name}
                        className="pl-1 text-red-600 font-bold"
                        onClick={handleCancleChair}
                      >
                        X
                      </button>
                    </td>
                  </tr>
                );
              })
            )}
            {information.length === 0 ? (
              <></>
            ) : (
              <tr>
                <td className="border-white border pl-1 font-medium">
                  Tổng tiền
                </td>
                <td className="pl-1">{totalPrice}</td>
                <td className="border-white border pl-1 text-amber-400 font-medium" />
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
const getSum = (total, num) => {
  return total + num;
};
