import React from 'react';
import { connect } from 'react-redux';
import { getNotes } from '../store/actions/index';
import NotesList from '../components/NotesList/NotesList';

class NotesListView extends React.Component {
     
    componentDidMount() {
        this.props.notesList;
        if(this.props.notesList.length === 0){
            this.props.getNotes();
        }
    }

    

    render() {
        return (
            <div>
            <NotesList 
            
            {...this.props}/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    notesList: state.notes
});

export default connect(mapStateToProps, { getNotes })(NotesListView);