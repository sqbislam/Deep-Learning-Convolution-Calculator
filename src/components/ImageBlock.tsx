const MAX_CHANNEL_DISPLAY = 10;
export default function ImageBlock({
  dimensions,
  classNames,
}: {
  dimensions: { height: string; width: string; channels: string };
  classNames?: string;
}) {
  const { height, width, channels } = dimensions;
  return (
    <div
      className={`w-32 h-32 bg-purple-200 border-2 border-white shadow-lg shadow-gray-200 relative ${
        classNames ? classNames : ''
      }`}
    >
      <p className='absolute text-md font-bold top-[-40px] right-[3em]'>
        {`W  ${width}`}
      </p>
      <p className='absolute text-md font-bold top-[2.5em] left-[-4em]'>
        {`H  ${height}`}
      </p>
      <p className='absolute text-md font-bold top-[-40px] right-[-3em]'>
        {`C  ${channels}`}
      </p>

      {channels &&
        [...Array(parseInt(channels) - 1)].map(
          (_, i) =>
            i < MAX_CHANNEL_DISPLAY && (
              <div
                key={i}
                className='absolute w-32 h-32 bg-slate-500 border-black opacity-70'
                style={{
                  top: `${i * 5 + 20}px`,
                  left: `${i * 5 + 20}px`,
                }}
              ></div>
            )
        )}
    </div>
  );
}
