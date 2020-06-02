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
  IonAlert,
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
  IonText,
} from "@ionic/react";
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
  chatbubblesOutline,
  starHalfOutline,
  swapVerticalOutline,
  informationCircleOutline,
  addCircleOutline,
  removeCircleOutline,
  helpBuoyOutline,
  helpOutline,
  layersOutline,
  sendOutline,
  removeOutline,
  trashBinOutline,
  trashOutline,
} from "ionicons/icons";
import AboutPopover from "../components/AboutPopover";
import "./RequestAdvice.scss";

interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  const [searchText, setSearchText] = useState<any>();
  const [mainTab, setMainTab] = useState<any>("advice");
  const [plusMinusTab, setPlusMinusTab] = useState<any>("+and-");
  const [checked, setChecked] = useState<any>(false);
  const [checked1, setChecked1] = useState<any>(false);
  const [adviceText, setAdviceText] = useState<any>(
    "Give me your opinion about..."
  );
  const [toppings, setToppings] = useState<any>("heart");
  const [names, setNames] = useState<[]>([]);
  const [showAlert1, setShowAlert1] = useState(false);
  const [toppings1, setToppings1] = useState([]);
  const [toppings2, setToppings2] = useState([]);
  const [toppings3, setToppings3] = useState([]);
  const [toppings4, setToppings4] = useState([]);
  const [toppings5, setToppings5] = useState([]);
  const [toppings6, setToppings6] = useState<any>(null);
  const [newQuestion, setNewQuestion] = useState<any>("");
  const [questionArr, setQuestionArr] = useState<any>([]);

  const removerOpenQuestion = (index: any) => {
    const newArr = questionArr.filter((el: String, i: number) => i !== index);
    setQuestionArr(newArr);
  };
  console.log(toppings2);
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
            <IonTitle>Give</IonTitle>
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
            <IonCol size="5">
              <IonSelect value="meeting" interface="action-sheet">
                <IonSelectOption value="meeting">Meeting</IonSelectOption>
                <IonSelectOption value="presentation">
                  Presentation
                </IonSelectOption>
                <IonSelectOption value="training">Training</IonSelectOption>
                <IonSelectOption value="workshop">Workshop</IonSelectOption>
                <IonSelectOption value="project">Project</IonSelectOption>
                <IonSelectOption value="other">Other</IonSelectOption>
              </IonSelect>
            </IonCol>
            <IonCol>
              <IonItem>
                <IonInput placeholder="Type in the event name, date"></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonSegment
                mode="ios"
                onIonChange={(e) => setMainTab(e.detail.value)}
                value={mainTab}
                color="danger"
              >
                <IonSegmentButton className="advice_Tab" value="advice">
                  <IonIcon icon={chatbubbleOutline} />
                  <IonLabel>Advice</IonLabel>
                </IonSegmentButton>
                <IonSegmentButton className="praise_Tab" value="praise">
                  <IonIcon icon={swapVerticalOutline} />
                  <IonLabel>Praise</IonLabel>
                </IonSegmentButton>
                <IonSegmentButton className="encourage_Tab" value="encourage">
                  <IonIcon icon={starHalfOutline} />

                  <IonLabel>Encourage</IonLabel>
                </IonSegmentButton>
              </IonSegment>
            </IonCol>
          </IonRow>
          {mainTab === "advice" && (
            <React.Fragment>
              <IonRow>
                <IonCol>
                  <IonItemDivider>
                    <IonItem>
                      <IonIcon
                        onClick={() => setShowAlert1(true)}
                        slot="start"
                        icon={informationCircleOutline}
                      ></IonIcon>
                      <IonText>
                        Refers to a personal point of view and is a
                        recommendation offered as a guide to action.
                      </IonText>
                    </IonItem>
                  </IonItemDivider>
                </IonCol>
              </IonRow>

              <IonRow>
                <IonCol>
                  <IonSegment
                    mode="ios"
                    onIonChange={(e) => setAdviceText(e.detail!.value!)}
                    scrollable
                    color="primary"
                    value={adviceText}
                  >
                    <IonSegmentButton value="I would like to share with you my thoughts on...">
                      <IonIcon icon={chatbubblesOutline} />
                      <IonLabel>Opinion</IonLabel>
                    </IonSegmentButton>
                    <IonSegmentButton value="I would like to share with you an idea about...">
                      <IonIcon icon={bulbOutline} />
                      <IonLabel>Idea</IonLabel>
                    </IonSegmentButton>
                    <IonSegmentButton value="I would recommend you to...">
                      <IonIcon icon={barChartOutline} />
                      <IonLabel>Improve</IonLabel>
                    </IonSegmentButton>
                  </IonSegment>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <IonItem>
                    <IonLabel position="floating">
                      Type in your feedback
                    </IonLabel>
                    <IonTextarea
                      auto-grow="true"
                      value={adviceText}
                      color="secondary"
                    ></IonTextarea>
                  </IonItem>
                </IonCol>
              </IonRow>
            </React.Fragment>
          )}
          {mainTab === "praise" && (
            <React.Fragment>
              <IonRow>
                <IonCol>
                  <IonItemDivider>
                    <IonItem>
                      <IonIcon
                        onClick={() => setShowAlert1(true)}
                        slot="start"
                        icon={informationCircleOutline}
                      ></IonIcon>
                      <IonText>
                        values the „performance, end-result, or a person
                      </IonText>
                    </IonItem>
                  </IonItemDivider>
                </IonCol>
              </IonRow>

              <IonRow>
                <IonCol>
                  <IonSegment
                    mode="ios"
                    onIonChange={(e) => setAdviceText(e.detail!.value!)}
                    scrollable
                    color="primary"
                    value={adviceText}
                  >
                    <IonSegmentButton value="Great Idea! Let's move forward with...">
                      <IonIcon icon={chatbubblesOutline} />
                      <IonLabel>Idea</IonLabel>
                    </IonSegmentButton>
                    <IonSegmentButton value="Thank you for your support on ...">
                      <IonIcon icon={bulbOutline} />
                      <IonLabel>Support</IonLabel>
                    </IonSegmentButton>
                    <IonSegmentButton value="Thanks, you have made a valuable contribution on...">
                      <IonIcon icon={barChartOutline} />
                      <IonLabel>Contribution</IonLabel>
                    </IonSegmentButton>
                    <IonSegmentButton value="Well done. Be proud of it. You have done a great job...">
                      <IonIcon icon={barChartOutline} />
                      <IonLabel>Achievement</IonLabel>
                    </IonSegmentButton>
                  </IonSegment>
                </IonCol>
              </IonRow>

              <IonRow>
                <IonCol>
                  <IonItem>
                    <IonLabel position="floating">
                      Type in your feedback
                    </IonLabel>
                    <IonTextarea
                      auto-grow="true"
                      value={adviceText}
                      color="secondary"
                    ></IonTextarea>
                  </IonItem>
                </IonCol>
              </IonRow>
            </React.Fragment>
          )}
          {mainTab === "encourage" && (
           <React.Fragment>
           <IonRow>
             <IonCol>
               <IonItemDivider>
                 <IonItem>
                   <IonIcon
                     onClick={() => setShowAlert1(true)}
                     slot="start"
                     icon={informationCircleOutline}
                   ></IonIcon>
                   <IonText>
                   values the effort done so far and helps to foster self-confidence, encourages action, focus on strenghts, competences and positive
                   </IonText>
                 </IonItem>
               </IonItemDivider>
             </IonCol>
           </IonRow>

           <IonRow>
             <IonCol>
               <IonSegment
                 mode="ios"
                 onIonChange={(e) => setAdviceText(e.detail!.value!)}
                 scrollable
                 color="primary"
                 value={adviceText}
               >
                 <IonSegmentButton value="I see the effort you have done so far, you have made good progress with…">
                   <IonIcon icon={chatbubblesOutline} />
                   <IonLabel>Progress</IonLabel>
                 </IonSegmentButton>
                 <IonSegmentButton value="Yes, it is not like you’ve expected. But I am confident you’ll do things differently next time. Go ahead and you’ll succeed…..">
                   <IonIcon icon={bulbOutline} />
                   <IonLabel>Failure</IonLabel>
                 </IonSegmentButton>
                 <IonSegmentButton value="Sometimes you can't see the light at the end of the tunnel. Focus on solutions, I am sure you'll find one…">
                   <IonIcon icon={barChartOutline} />
                   <IonLabel>Challenge</IonLabel>
                 </IonSegmentButton>
                 <IonSegmentButton value="I’m impressed, you have really a natural strength in…">
                   <IonIcon icon={barChartOutline} />
                   <IonLabel>Impressed</IonLabel>
                 </IonSegmentButton>
               </IonSegment>
             </IonCol>
           </IonRow>

           <IonRow>
             <IonCol>
               <IonItem>
                 <IonLabel position="floating">
                   Type in your feedback
                 </IonLabel>
                 <IonTextarea
                   auto-grow="true"
                   value={adviceText}
                   color="secondary"
                 ></IonTextarea>
               </IonItem>
             </IonCol>
           </IonRow>
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
        <IonAlert
          isOpen={showAlert1}
          onDidDismiss={() => setShowAlert1(false)}
          header={"Advice"}
          // subHeader={""}
          message={
            "Refers to a personal point of view and is a recommendation offered as a guide to action. Choose one option and complete the request by typing in the text field."
          }
          buttons={["OK"]}
        />
      </IonContent>
    </IonPage>
  );
};

export default React.memo(About);
