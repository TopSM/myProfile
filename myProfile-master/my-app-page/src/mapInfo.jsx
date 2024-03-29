import React from "react";
import "./Main.css";

export default function mapInfo(props) {
  var checkLanguage = Language => {
    if (Language != null) {
      return <h4>Language: {Language}</h4>;
    }
  };
  var checkLink = (Name = "Link", Link = "") => {
    if (Link != null && Link !== "") {
      return (
        <React.Fragment>
          <p>
            Link: <a href={Link}> {Name}</a>
          </p>
        </React.Fragment>
      );
    }
  };

  return (
    <React.Fragment>
      <div className="mobileCss" >
        {props.infoList.map(il => (
          <div className="info-list title-fitting" key={il.id} data-aos="fade-down">
            <div>
              <a href={il.Link}>
                <img className="info-pic"
                  src={il.Picture}
                  alt={il.Alt}
                  data-aos="slide-up"
                />
              </a>
            </div>
            <div data-aos="fade-right">
              <h3>{il.JobName}</h3>
              <h4>{il.Title}</h4>
              <h4>Year: {il.Year}</h4>
              {checkLanguage(il.Language)}
              {/* {checklanguage()} */}
            </div>
            <div className="text bullet-list standard-fitting">
              <ul>
                {props.infoList[il.id].About.map(a => (
                  <li className="contact-list" key={a.id}>
                    {a.bullet}
                  </li>
                ))}
              </ul>
            </div>
            {checkLink(il.JobName, il.Link)}
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}
