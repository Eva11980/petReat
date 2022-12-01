import SearchBar from './components/SearchBar';
import SelectBar from './components/SelectBar';
import ButtonBar from './components/ButtonBar';
import ForumListBar from './components/ForumListBar';
import './ForumList.css';

const buttonText = [
  { value: 1, label: '綜合', to: '/complex' },
  { value: 2, label: '發問', to: '/question' },
  { value: 3, label: '經驗', to: '/experience' },
  { value: 4, label: '活動', to: '/activity' },
  { value: 5, label: '送養', to: '/give' },
  { value: 6, label: '領養', to: '/adoption' },
  { value: 7, label: '其他', to: '/other' },
];

function ForumList() {
  return (
    <>
      <div className="forum_list_wrap">
        <div className="forum_search_select">
          <SearchBar />
          <SelectBar />
        </div>

        <div className="forum_list_button_wrap">
          {buttonText.map((e, i) => {
            const { label, value, to } = e;
            console.log(e);
            return <ButtonBar value={value} label={label} to={to} key={i} />;
          })}
        </div>

        <ForumListBar />
        <ForumListBar />
        <ForumListBar />
        <ForumListBar />
        <ForumListBar />
        <ForumListBar />
      </div>
    </>
  );
}

export default ForumList;
