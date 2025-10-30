import PromptSuggestionButton from "./PromptSuggestionButton"

const PromptSuggestionsRow= ({onPromptClick})=>{
    const prompts=[
        "what happend in ufc 318?",
        "What is islam makachev's record?",
        "who trained islam makachev",
        "what was ufc's latest fight"
    ]

    return(
        <div className="prompt-suggestion-row">
            {prompts.map((prompt , index)=>
            <PromptSuggestionButton
            key={`suggestion-${index}`}
            text={prompt}
            onClick={()=>onPromptClick(prompt)}
            />
        )}
        </div >
    )
}

export default PromptSuggestionsRow