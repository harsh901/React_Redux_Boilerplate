import React from 'react';
import {Container,Row,Col,Image} from 'react-bootstrap'

class Images extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checkedItems: new Map(),
            value:[],
            imagesArray:[]
        }
    }

    download = (images) => {
        if(images.length>0) {
            const element = document.createElement("a");  
            let file = new Blob(this.state.imagesArray,
              { type: this.state.imagesArray }
            );
            console.log(file)
            element.href = URL.createObjectURL(file);
            console.log("hredfffffff",element.href)
            element.download = file.type;
            element.click();
        }
    }

    handleClick = (event,i,image) => {
        let data = [...this.state.imagesArray];
        let value = this.state.value.slice();   
        value[i] = event.target.checked;
        if(value[i] === true) {
            data.push(image)
            this.setState({
                imagesArray:data
            })

        } else if(value[i] === false) {
            data.pop(image)
            this.setState({
                imagesArray:data
            })
        }
    }
    undo = () => {

    }

    redo = () => {
        
    }

    render() {
        console.log(this.state.imagesArray)
        let data = this.props.cameras.camera;
        return (
            <div>
                <button onClick={() => this.download(this.state.imagesArray)}>Download</button>
                {/* <button onClick={() => this.undo()}>Undo</button>
                <button onClick={() => this.undo()}>Redo</button> */}
                {data && data.map((item,i) => {
                    return (
                        <Container  key={item.id}>
                            <Row>
                                <Col xs={6} md={4}>
                                {item.images!==undefined ? <Image src={item.images.large._content} fluid />:""}
                                {item.images!==undefined ? <input checked={this.state.value[i]} type="checkbox" onChange={(e) => this.handleClick(e, i,item.images.large._content)}/>:""}
                                {/* {item.images!== undefined ? <input type='checkbox' onChange = {(e) => this.handleClick(e,item.images.large._content)}value={item.images.large._content} id='checkboxOneInput' name='' /> : ""} */}
                                </Col>
                            </Row>
                        </Container>
                    )
                })}
            </div>
        )
    }
}
export default Images;