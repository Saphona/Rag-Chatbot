import "./global.css"


export const metadata={
    title:"UFC",
    description:"best place for your UFC questions",

}

const RootLayout =({children})=> {
    return (
       <html lang="en">
        <body>{children}</body>
       </html>

    )
}
export default RootLayout;