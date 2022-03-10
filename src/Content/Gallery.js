import styled, { keyframes } from 'styled-components';
import bathroom2 from '../assets/images/bathroom2.jpg';
import Text from '../Components/Text'
import Title from 'Components/Title';
import { Image } from 'antd';
import { useState } from 'react';

const curtain = keyframes`
    0% {
        grid-gap: 100vw;
        opacity:0;
    }
    100% {
        grid-gap: 0; 
        opacity:1;
    }
`



const Gallery = () => {
    const [visible1, setVisible1] = useState(false);
    const [visible2, setVisible2] = useState(false);
    const [visible3, setVisible3] = useState(false);
    const [visible4, setVisible4] = useState(false);


    return (
        <Wrapper>
            <Layer>

                <Title>Nasze prace: </Title>

                <Body>
                    <div className="gal1">
                        <Image src="https://creative-remont.eu/lib/w9ni26/DSCN1444-kfrbvw8a.JPG" alt="" preview={{ visible: false }} onClick={() => setVisible1(true)} />
                        <Text>Łazienki</Text>

                    </div>
                    <div className="gal2">
                        <Image src="https://creative-remont.eu/lib/w9ni26/CAM00008-kfu2t6xc.jpg" alt="" preview={{ visible: false }} onClick={() => setVisible2(true)} />
                        <Text>Tapetowanie</Text>

                    </div>
                    <div className="gal3">
                        <Image src="https://creative-remont.eu/lib/w9ni26/26112010031-kfu3bl1m.jpg" alt="" preview={{ visible: false }} onClick={() => setVisible3(true)}  />
                        <Text>Sufity, Zabudowy</Text>

                    </div>
                    <div className="gal4">
                        <Image src="https://creative-remont.eu/lib/w9ni26/DSCN1466-kfu3ndjo.JPG" alt="" preview={{ visible: false }} onClick={() => setVisible4(true)}/>
                        <Text>Gładzie, Malowanie</Text>

                    </div>


                    
                   

                </Body>
                
                <div style={{ display: 'none' }}>
                    <Image.PreviewGroup preview={{ visible:visible1, onVisibleChange: vis => setVisible1(vis) }}>
                        <Image src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp" />
                        <Image src="https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp" />
                        <Image src="https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp" />
                    </Image.PreviewGroup>
                </div>

                <div style={{ display: 'none' }}>
                    <Image.PreviewGroup preview={{ visible:visible2, onVisibleChange: vis => setVisible2(vis) }}>
                        <Image src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp" />
                        <Image src="https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp" />
                        <Image src="https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp" />
                    </Image.PreviewGroup>
                </div>

                <div style={{ display: 'none' }}>
                    <Image.PreviewGroup preview={{ visible:visible3, onVisibleChange: vis => setVisible3(vis) }}>
                        <Image src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp" />
                        <Image src="https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp" />
                        <Image src="https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp" />
                    </Image.PreviewGroup>
                </div>

                <div style={{ display: 'none' }}>
                    <Image.PreviewGroup preview={{ visible:visible4, onVisibleChange: vis => setVisible4(vis) }}>
                        <Image src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp" />
                        <Image src="https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp" />
                        <Image src="https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp" />
                    </Image.PreviewGroup>
                </div>
            </Layer>
        </Wrapper>

    );
}


const Layer = styled.div`
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    display:flex;
    justify-content:center;
    flex-direction:column;
    align-items:center;
    background:rgba(0,0,0,0.5);
`
const Wrapper = styled.div`
    background:purple;
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    position:relative;
    background:url(${bathroom2});
    background-color: #cccccc; 
    background-position: center;
    background-repeat: no-repeat; 
    background-size: cover; 

    

    @media (min-width: 768px) {
        background-attachment: fixed;
    }

`;

const Body = styled.div`
    display:grid;
    top:5%;
    position:relative;
    height:80%;
    align-items:center;
    justify-content:center;
    margin:0 10% 0 10%;
    grid-template-columns: 1fr 1fr;
    grid-template-rows:fit-content fit-content;
    grid-template-areas: 
        "gal1 gal2"
        "gal3 gal4";

    & * img {
        width:100%;
        cursor:pointer;
        transition: all 0.3s ease-in-out;
        &:hover {
            transform: scale(1.1);
        }
        @media (min-width: 768px) {
            width:70%;
        }
        }
     
    & > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        margin: 5%;
       
    }
    @media (min-width: 768px) {
        width:60%;
        animation: ${curtain} 1s ease-in-out forwards;
    }

`;



export default Gallery;