import Button from '../button/Button';
import './NotFound.css';

export default function NotFound({ lang }) {
    const content = [{
        esp: {
            message: 'Parece que te perdiste, dejame ayudarte a regresar.',
            back: 'Regresar',
            home: 'Inicio'
        },
        eng: {
            message: "It seems that you're lost, let me help you to return.",
            back: 'Back',
            home: 'Home'
        }
    }]

    const contentOn = lang == 'es-ES' ? content[0].esp : content[0].eng;

    return (
        <div className='notfound-container'>
            <h1>Hmm.</h1>
            <p>{contentOn.message}</p>
            <Button type='dark' size='normal' href='#' onClick={() => window.history.back()}>{contentOn.back}</Button>
            <Button type='dark' size='normal' href='/'>{contentOn.home}</Button>
        </div>
    )
}