import Button from "../components/Button";
import { GoArchive } from "react-icons/go";

function ButtonPage() {
  return (
    <div className="App">
      <div>
        <Button primary>
          <GoArchive /> hi there
        </Button>
      </div>
      <div>
        <Button secondary>hi there</Button>
      </div>
      <div>
        <Button success rounded>
          hi there
        </Button>
      </div>
      <div>
        <Button warning outline>
          hi there
        </Button>
      </div>
      <div>
        <Button danger>hi there</Button>
      </div>
    </div>
  );
}

export default ButtonPage;
