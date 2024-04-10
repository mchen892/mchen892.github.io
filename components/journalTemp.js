import PropTypes from 'prop-types';

function JournalTemplate({ date, info = [] }) {
  return (
    <main className="">
      <div className="lg:ml-80 lg:mt-32 p-2">
        <h2 className="text-xl p-2">{date}</h2>
        <ul className="text-center text-gray-600 text-sm">
          {Array.isArray(info) && info.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </main>
  );
}

JournalTemplate.propTypes = {
  date: PropTypes.string,
  info: PropTypes.arrayOf(PropTypes.string),
};

export default JournalTemplate;
