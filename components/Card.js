export default function Card({ title }) {
  // todo: first, last, image, username (@ + first + last)
  return (
    <div className="p-5 border border-gray-200 rounded-3xl w-max space-y-3">
      <img
        className="w-24 mx-auto rounded-full"
        src="https://yt3.ggpht.com/ytc/AAUvwngqtTOfBOr4W_rGcOt2LANtJEDa90I-S_C5sjKCRg=s900-c-k-c0x00ffffff-no-rj"
      />
      <h3 className="text-2xl text-center font-bold">Alan Nakari</h3>
      <p className="text-center text-gray-500">@helloyesgo</p>
    </div>
  );
}
