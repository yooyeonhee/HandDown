import styled from "@emotion/styled";
import LayoutBanner from "./banner/LayoutBanner.container";
import LayoutHeader from "./sidebar/LayoutSidebar.container";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    background-color: darkblue;
`
export default function Layout(props){

    return(
        <>
        <LayoutHeader/>
        <Container>
            <LayoutBanner/>
            {props.children}
        </Container>
        
        </>
    )
}