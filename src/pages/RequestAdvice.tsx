import React, { useState, Fragment } from "react";
import {
  IonHeader,
  IonToolbar,
  IonContent,
  IonPage,
  IonButtons,
  IonMenuButton,
  IonButton,
  IonIcon,
  IonDatetime,
  IonSelectOption,
  IonList,
  IonItem,
  IonLabel,
  IonSelect,
  IonPopover,
  IonAvatar,
  IonItemDivider,
  IonFabButton,
  IonToggle,
  IonBackButton,
  IonGrid,
  IonRow,
  IonCol,
  IonTitle,
  IonSearchbar,
  IonSegment,
  IonSegmentButton,
  IonInput,
  IonTextarea,
  IonImg,
} from "@ionic/react";
import "./About.scss";
import {
  ellipsisHorizontal,
  ellipsisVertical,
  personCircleOutline,
  homeOutline,
  home,
  heart,
  pin,
  star,
  call,
  globe,
  basket,
  bulbOutline,
  chatbubbleOutline,
  barChartOutline,
} from "ionicons/icons";
import AboutPopover from "../components/AboutPopover";

interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  const [searchText, setSearchText] = useState<any>();
  const [mainTab, setMainTab] = useState<any>("advice");
  const [plusMinusTab, setPlusMinusTab] = useState<any>("+and-");
  const [adviceText, setAdviceText] = useState<any>("heart");
  const [toppings, setToppings] = useState<any>("heart");
  const [names, setNames] = useState<[]>([]);

  const addName = () => {
    console.log(searchText);
    let newName: any = names;
    newName = [...names, searchText];
    setNames(newName);
    console.log(names);
  };
  return (
    <IonPage>
      <IonContent>
        <IonHeader>
          <IonToolbar className="ion-text-center center-title">
            <IonButtons slot="start">
              <IonBackButton defaultHref="/tabs/home" />
            </IonButtons>
            <IonTitle>Request</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonSearchbar
                autocomplete="on"
                value={searchText}
                onIonChange={(e) => setSearchText(e.detail.value!)}
                onBlur={addName}
                showCancelButton="focus"
                placeholder="Search teammate by name"
              ></IonSearchbar>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItemDivider>
                <IonIcon slot="start" icon={personCircleOutline}></IonIcon>
                <IonLabel>
                  <IonGrid>
                    <IonRow>
                      {names.map((name: any) => {
                        return <IonCol>{name}</IonCol>;
                      })}
                    </IonRow>
                  </IonGrid>
                </IonLabel>
              </IonItemDivider>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonSegment
                mode="ios"
                onIonChange={(e) => setMainTab(e.detail.value)}
                value={mainTab}
                color="primary"
              >
                <IonSegmentButton className="segmentButton" value="advice">
                  <IonLabel>Advice</IonLabel>
                </IonSegmentButton>
                <IonSegmentButton className="segmentButton" value="+and-">
                  <IonLabel>+ and -</IonLabel>
                </IonSegmentButton>
                <IonSegmentButton className="segmentButton" value="rating">
                  <IonLabel>Rating</IonLabel>
                </IonSegmentButton>
              </IonSegment>
            </IonCol>
          </IonRow>
          {mainTab === "advice" && (
            <React.Fragment>
              <IonRow>
                <IonCol>
                  <IonSegment
                    onIonChange={(e) => setAdviceText(e.detail!.value!)}
                    scrollable
                    value={adviceText}
                  >
                    <IonSegmentButton value="Give me your opinion about...">
                      <IonIcon icon={chatbubbleOutline} />
                      <IonLabel>Opinion</IonLabel>
                    </IonSegmentButton>
                    <IonSegmentButton value="Give me an idea on...">
                      <IonIcon icon={bulbOutline} />
                      <IonLabel>Idea</IonLabel>
                    </IonSegmentButton>
                    <IonSegmentButton value="Give me a hint for improving...">
                      <IonIcon icon={barChartOutline} />
                      <IonLabel>Improve</IonLabel>
                    </IonSegmentButton>
                    <IonSegmentButton value="Please give me a suggestion on..">
                      <IonIcon icon={star} />
                      <IonLabel>Suggest</IonLabel>
                    </IonSegmentButton>
                    <IonSegmentButton value="call">
                      <IonIcon icon={call} />
                    </IonSegmentButton>
                    <IonSegmentButton value="globe">
                      <IonIcon icon={globe} />
                    </IonSegmentButton>
                    <IonSegmentButton value="basket">
                      <IonIcon icon={basket} />
                    </IonSegmentButton>
                  </IonSegment>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <IonItemDivider></IonItemDivider>
                  <IonItem>
                    <IonLabel position="floating">
                      Type in your feedback
                    </IonLabel>
                    <IonTextarea
                      auto-grow="true"
                      value={adviceText}
                    ></IonTextarea>
                  </IonItem>
                </IonCol>
              </IonRow>
             
            </React.Fragment>
          )}
          {mainTab === "+and-" && (
            <React.Fragment>
              <IonRow>
                <IonCol>
                  <IonSegment
                    mode="ios"
                    onIonChange={(e) => setPlusMinusTab(e.detail.value)}
                    value={plusMinusTab}
                    color="primary"
                  >
                    <IonSegmentButton className="segmentButton" value="+and-">
                      <IonLabel>+ and -</IonLabel>
                    </IonSegmentButton>
                    <IonSegmentButton
                      className="segmentButton"
                      value="costumize"
                    >
                      <IonLabel>Costumize</IonLabel>
                    </IonSegmentButton>
                  </IonSegment>
                </IonCol>
              </IonRow>
            </React.Fragment>
          )}

          {mainTab === plusMinusTab && (
            <React.Fragment>
              <IonItemDivider>Select predefined Questions. </IonItemDivider>
              <IonItem>
                <IonTitle>What went well?</IonTitle>{" "}
                <IonToggle color="primary" />
              </IonItem>
              <IonItem>
              <IonTitle>What can be improved?</IonTitle>{" "}
                <IonToggle color="secondary" />
              </IonItem>
              <IonItem>
              <IonTitle>What should i avoid?</IonTitle>{" "}
                <IonToggle color="danger" />
              </IonItem>
            </React.Fragment>
          )}
           <IonButton
                onClick={(e) => setAdviceText("The request was sent!")}
                expand="block"
                fill="outline"
              >
                SEND
              </IonButton>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default React.memo(About);
