import React from "react";
import styled from "styled-components";

export default () => {
    return (
        <StyledBanner>
            <div class="banner">
                <p>EN TENDANCE</p>
                <h1>Jul - La Machine</h1>
                <button>Go to Album</button>
            </div>
        </StyledBanner>)
};

const StyledBanner = styled.div`
    display: flex;
    align-items: flex-end;
    background: url("https://cdn.radiofrance.fr/s3/cruiser-production/2020/05/096ba162-54e2-4adb-bd65-2fdc4403d05c/801x410_whatsapp_image_2020-05-20_at_10.14.44.jpg") center no-repeat;
    background-size: cover;
    padding: 20px;
    height: 300px;
    width: 100%;

    .banner {
        height: 50%;
        margin-bottom: 0;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;

        p, h1 {
            color: #FFF;
        }

        h1 {
            font-weight: 700;
        }

        button {
            background-color: #FFF;
            color: red;
            border-radius: 3px;
            border: solid 1px red;
        }
    }
`;
