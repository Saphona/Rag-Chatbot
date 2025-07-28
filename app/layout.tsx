import "./global.css"


export const metadata={
    title:"F1gpt",
    description:"the place to go for all your f1 questions",

}

const RootLayout =({children})=> {
    return (
       <html lang="en">
        <body>{children}</body>
       </html>

    )
}
export default RootLayout;