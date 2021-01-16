import styled from 'styled-components';

export const MoviePage = styled.div`
position: relative;

display: flex;
width: 100%;
height: 100vh;

.loading-svg {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}`;

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;

`;

export const InfoContainer = styled.div`
   max-width: 1200px;
   width: 100%;
   background-color: rgba(0,0,0,0.8);
   display: flex;
   margin: 0 auto;
   padding: 30px;
   z-index: 10;
   margin: 0 auto;

   * {
     font-family: "Open Sans", sans-serif;
   }
`

export const Poster = styled.img`
  width:100%;
  height: 100%;
  opacity: 0.2;
  position: absolute;
  object-fit: cover;
  object-position: top;
  
  &:after {
		box-shadow: (0px -200px 50px -125px rgba(255,255,255,1));
		content: '';
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 999;
	}
`; 


export const Thumb = styled.div`
  height: 450px;
  max-width: 300px;
  width: 100%;
  display: flex;
  overflow: hidden;

  img{
    width: 100%;
    height: 100%;
  }
`;

export const InfoTextContainer = styled.div`
  color: white;
  padding: 0 1rem;
`;
export const Title = styled.div`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 30px;
  text-transform: uppercase;
`;

export const Overview = styled.div``;

export const Providers = styled.div`
  height: 40px;
  display: flex;
  margin-top: 20px;
  flex-direction: column;

  gap: 10px;

  h5 {
    margin-bottom: 10px;
  }

  & > div {
    display: flex;
    gap: 10px;
    flex-direction: column;
  }

  div {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
  }

  img {
    max-width: 40px;
    width: 100%;
    height: 100%;
  }
`;


