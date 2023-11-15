export default function MenuItem() {
  return (
    <div className="bg-gray-200 p-4 rounded-lg text-center group hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all">
      <div className="text-center">
        <img src="/pizza.png" alt="item" className="max-h-auto max-h-24 block mx-auto" />
      </div>
      <h4 className="font-semibold text-xl my-3">pepperoni pizza</h4>
      <p className="text-gray-500 text-sm">
        Bánh bida ngon lắm mấy bạn ơi. mua ăn thử ngay nào ?
      </p>
      <button className="bg-primary mt-4 text-white rounded-full px-8 py-2">
        Thêm giỏ hàng $12
      </button>
    </div>
  );
}
