import {Row,Col} from 'react-bootstrap';
import './visualComponents.css';

export default function Post(props) {
    return <Col sm={12} key={props.index}>
        <a className= "articleLink" href={props.post.url}>
            <Row >
                <Col className="imgContainer" sm={4} xs={12}>
                        <img src={props.post.thumb} alt=""></img>
                </Col>
                <Col sm={8} xs={12}>
                    <div className="date">{props.post.date}</div>
                    <h2>{props.post.title}</h2>
                    <p>{props.post.excerpt}</p>
                </Col>
            </Row>
        </a>
    </Col>
}