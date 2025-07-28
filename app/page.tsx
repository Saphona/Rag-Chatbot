"use client";
import  Image from "next/image"
import f1GPTLogo from "./assets/f1GPTLogo.png"
import {useChat} from "ai/react"
// chat UI library , updates messages from ai 

// import { useAIState } from "ai/rsc";

import Bubble from "./comonents/Bubble"
import LoadingBubble from "./comonents/LoadingBubble";
import PromptSuggestionsRow from "./comonents/PromptSuggestionsRow";
import { Message } from "ai";

const Home= ()=>{
  // const [messages,setMessages]= useAIState();
  const {append , isLoading,messages ,input, handleInputChange , handleSubmit }=useChat();

   const noMessages =  !messages || messages.length === 0
   const handlePrompt = (promptText: string) => {
  append({
    content: promptText,
    role: "user"
  });
};

   return (
     <main>
        <Image src={f1GPTLogo} width="250"alt ="F1GPT logo"/>
        <section className={noMessages ? "": "populated"}>
          {noMessages ? (
              <>
              <p className="starter-text">
               The place for formula One questions
              </p>
              <br/>
              <PromptSuggestionsRow onPromptClick={handlePrompt}/>
              </>
          ):(
             <>
             {messages.map((message,index)=><Bubble key={`message-${index}`} message={message}/>)}
             {/* maps messages into text bubbles */}
           { isLoading&& <LoadingBubble/>}
             </>
          )}
         
        </section>
         <form 
          onSubmit={handleSubmit}
          >
            <input className="question-box" onChange={handleInputChange}  value ={input} placeholder="ask  me  any thing"/>
            <input type ="submit"/>

          </form>
     </main>
   )
}


export default Home