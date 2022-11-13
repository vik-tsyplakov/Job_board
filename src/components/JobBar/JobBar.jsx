import React from "react";
import Content from "./Content";
import RatingDayBookmark from "./RatingDayBookmark";
let data = [];

class JobBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      title: null,
    };
  }
  componentDidMount() {
    fetch(
      "https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      for (let i = 0; i < items.length; i++) {
        data.push(items[i]);
        for (let j = 0; j < items.length; j++) {
          return (
            <ul>
              {items.map((item) => (
                <li key={item.id}>
                  <div className="block smmd:flex max-w-[1400px] sm:h-[164px] h-[206px] sm:bg-[#FFFFFF] bg-[#EFF0F5] rounded-lg px-[16px] py-[24px] mb-[8px] items-center sm:shadow-barlarge shadow-barsmall justify-between">
                    <div className="">
                      <Content title={item.title} />
                    </div>
                    <div className="smmd:block hidden">
                      <RatingDayBookmark />
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          );
        }
      }
    }
  }
}

export default JobBar;
