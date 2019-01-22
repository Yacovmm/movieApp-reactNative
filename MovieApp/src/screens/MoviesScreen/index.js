import React from 'react';
import { StyleSheet, View, FlatList, Text} from 'react-native';
import { MoviesService } from '../../services';


class MovieScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            movies: [
                'Guardioes da galaxia',
                'Homem aranha',
                'Julio e seus filhos'
            ]
        };
    }

    componentWillMount(){
        MoviesService.fetchMovies((movie) => {
            let movies = [];

            for(var i =0; i < 5; i++){
                let movieObj = {
                    Title: `${movie.Title} ${i}`
                };
                movies.push(movieObj)
            }

            this.setState({movies});
        });
    }

    _renderItem = ({item}) => {
        return (
            <Text style={styles.movieItem} key={item.imdbID}> {item.Title} </Text>
        );
    };

    render(){
        return(
            <View style={styles.container}>
                <FlatList
                    data = {this.state.movies}
                    renderItem = { this._renderItem}
                />     
                              
            </View>
        )

    }


}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#F5FCCC',
        alignItems: 'center',
        justifyContent: 'center'
    },

    movieItem: {
        fontSize: 18,
        color: 'green'
    }

})

export default MovieScreen;