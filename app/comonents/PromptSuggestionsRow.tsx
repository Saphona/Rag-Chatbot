import PromptSuggestionButton from "./PromptSuggestionButton"

const PromptSuggestionsRow= ({onPromptClick})=>{
    const prompts=[
        "Who is the newest driver for Ferrari?",
        "why is ferari named ferari?",
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