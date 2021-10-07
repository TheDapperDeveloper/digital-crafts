import styled from "styled-components";

export const DashboardLayout = styled.div.attrs(props => ({
    className:props.className,
}))`
    &.chart {
        display:flex;
        flex-direction: column;
        align-items: center;
    }
`

