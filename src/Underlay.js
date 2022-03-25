import styled from 'styled-components'

const Grid = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: start;
  font-family: 'ThunderBlack';
  font-size: 4em;
  line-height: 0.74em;
  color: #ffffff;

  @media (max-width: 425px) {
    grid-template-columns: 1fr;
  }
`

const Left = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: 1fr auto;
  width: 100%;
  height: 100%;
  padding: 100px;
  white-space: nowrap;
  font-family: 'ThunderThin';
  line-height: 1em;
  @media (max-width: 768px) {
    padding: 50px;
  }
`

const Right = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  background: #2299ff;
  color: #252525;
`

const Sub = styled.div`
  align-self: end;
  width: 150px;
  height: 150px;
  background: #2299ff;
`

const Jumbo = styled.div`
  align-self: center;
  text-align: right;
  padding: 100px;
  font-size: 1em;
  line-height: 1em;
  color: #252525;
`

const Label = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  font-family: 'ThunderThin';
  font-size: 0.2em;
  line-height: 1em;
  color: #252525;
  padding: 100px;

  @media (max-width: 768px) {
    padding: 50px;
  }

  @media (max-width: 425px) {
    padding: 20px;
  }
`

export default function Underlay() {
  return (
    <Grid>
      <Left>
        <div>
          TIME TO
          <br />
          THINK
          <br />
          OUTSIDE
          <br />
          THE
          <br />
          BOX.
        </div>
        <Sub />
      </Left>
      <Right>
        <Jumbo>
          <div>
            DISCOVER
            <br />
            STORE
            <br />
            SOLUTIONS
            <br />
            REACH
            <br />
          </div>
        </Jumbo>
      </Right>
    </Grid>
  )
}
