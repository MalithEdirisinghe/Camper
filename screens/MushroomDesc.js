import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';

const MushroomDesc = ({ route, navigation }) => {
    const { imageUri, defectiveness, edibility } = route.params;
    const [capturedImageUri] = useState(imageUri);
    const [Pname, setName] = useState('');
    const [Edible, setEdible] = useState('');
    const [disc, setDisc] = useState('');
    const [warn, setWarn] = useState('');
    const [tips, setTips] = useState('');
    const [img, setImg] = useState([]);
    0
    useEffect(() => {
        if (defectiveness === 'gyromitra_esculenta') {
            setName("Gyromitra esculenta (False Morel)");
            setEdible("Not recommended for beginners! This brain-like mushroom is conditionally edible with extreme caution due to the presence of toxins called gyromitrin and vernalin. Improper preparation can be fatal.");
            setDisc("This brain-like mushroom resembles Gyromitra esculenta but is larger with a more rounded cap and a thicker stem. The cap color can range from reddish-brown to brown.");
            setImg([
                require('../assets/gyromitra_esculenta.jpg'),
                require('../assets/gyromitra_esculenta2.jpg')
            ]);
            setWarn("Due to the danger of improper preparation, this mushroom is not recommended for consumption by beginners. Always consult an expert for identification and preparation methods if you find this mushroom.");
        }
        else if (defectiveness === 'amanita_muscaria') {
            setName("Amanita muscaria (Fly Agaric)");
            setEdible("Highly poisonous. This can cause serious illness or death.");
            setDisc("This iconic mushroom has a bright red cap with white warts and a white stem.");
            setImg([
                require('../assets/amanita_muscaria1.jpg'),
                require('../assets/amanita_muscaria2.jpg')
            ]);
            setWarn("Never eat! This brightly colored mushroom is a classic danger sign and should be avoided entirely.");
        }
        else if (defectiveness === 'qmanita_pantherina') {
            setName("Amanita pantherina (Panther Cap)");
            setEdible("Highly poisonous. This can cause serious illness or death.");
            setDisc("This close relative of Amanita muscaria has a brown or grayish-brown cap with whitish patches and a white stem. It can be mistaken for edible mushrooms.");
            setImg([
                require('../assets/amanita_pantherina1.jpg'),
                require('../assets/amanita_pantherina2.jpg')
            ]);
            setWarn(": Never eat! This mushroom closely resembles some edible species and can be deadly if mistaken. Avoid entirely.");
        }
        else if (defectiveness === 'gyromitra_gigas') {
            setName("Gyromitra gigas (Giant False Morel)");
            setEdible("Not recommended for beginners! Similar to Gyromitra esculenta, this is conditionally edible with extreme caution due to toxins. Improper preparation can be fatal. It is generally larger than Gyromitra esculenta.");
            setDisc("This brain-like mushroom resembles Gyromitra esculenta but is larger with a more rounded cap and a thicker stem. The cap color can range from reddish-brown to brown.");
            setImg([
                require('../assets/gyromitra_gigas1.jpg'),
                require('../assets/gyromitra_gigas2.png')
            ]);
            setWarn(": Due to the danger of improper preparation, this mushroom is not recommended for consumption by beginners. Always consult an expert for identification and preparation methods if you find this mushroom.");
        }
        else if (defectiveness === 'gyromitra_infula') {
            setName("Gyromitra infula (Turban False Morel)");
            setEdible("Not recommended for beginners! Similar to other Gyromitra species, this is conditionally edible with extreme caution due to toxins. Improper preparation can be fatal. The cap resembles a turban shape.");
            setDisc("This brain-like mushroom has a reddish-brown cap with irregular folds that resemble a turban and a whitish stem.");
            setImg([
                require('../assets/gyromitra_gigas1.jpg'),
                require('../assets/gyromitra_gigas2.png')
            ]);
            setWarn(": Due to the danger of improper preparation, this mushroom is not recommended for consumption by beginners. Always consult an expert for identification and preparation methods if you find this mushroom.");
        }
        else if (defectiveness === 'puffball_mushroom') {
            setName("Lycoperdon perlatum (Puffball mushroom)");
            setEdible("Yes, but with extreme caution! Only the young, pear-shaped puffball with completely white flesh inside is considered safe to eat. Discard the entire mushroom if the flesh is brown or powdery inside!");
            setDisc("This round or pear-shaped mushroom has a smooth, white exterior when young. As it matures, the outer skin cracks, revealing a brown powdery interior and losing its firmness.");
            setImg([
                require('../assets/puffball_mushroom1.jpg'),
                require('../assets/puffball_mushroom2.png')
            ]);
            setTips("o	Look for puffballs that are firm and feel heavy for their size.o	Cut the mushroom in half to check the color of the flesh.The flesh should be completely white.o	Never eat a puffball with brown or powdery flesh inside!");
        }
        else if (defectiveness === 'oyster_mushroom') {
            setName("Pleurotus ostreatus (Oyster mushroom)");
            setEdible("Safe to eat. This is a popular cultivated mushroom and can also be found growing wild in Sri Lanka.");
            setDisc("This oyster-shaped mushroom has a grey or tan cap with gills running down the stem. It usually grows in clusters on dead or dying trees.This round or pear-shaped mushroom has a smooth, white exterior when young. As it matures, the outer skin cracks, revealing a brown powdery interior and losing its firmness.This oyster-shaped mushroom has a grey or tan cap with gills running down the stem. It usually grows in clusters on dead or dying trees.");
            setImg([
                require('../assets/oyster_mushroom1.jpg'),
                require('../assets/oyster_mushroom2.jpg')
            ]);
            setTips("o	Look for oyster mushrooms with firm caps and gills that run down the stem.o	Avoid mushrooms that are slimy, discolored, or have signs of insect damage.");
        }
        else if (defectiveness === 'schizophyllum_commune') {
            setName("Schizophyllum commune (Split-gill mushroom)");
            setEdible("Edible, but some may find it tough due to its fibrous texture.");
            setDisc("This thin, fan-shaped mushroom has white to cream-colored gills that are deeply split, making it look like it has multiple gills. It can be found growing on dead wood or branches.");
            setImg([
                require('../assets/schizophyllum_commune1.jpg'),
                require('../assets/schizophyllum_commune2.jpg')
            ]);
            setTips("o	Young Schizophyllum mushrooms tend to be more tender than mature ones. o	If you choose to eat it, be prepared for a chewier texture.");
        }
        else if (defectiveness === 'trametes_hirsuta') {
            setName("Trametes hirsuta (Hairy bracket fungus)");
            setEdible("Edible, but tough. Best suited for grinding into a powder for soups or stews due to its hard texture.");
            setDisc("This bracket fungus has a tough, brown or grey console-shaped cap with a hairy surface. It grows on dead trees.");
            setImg([
                require('../assets/trametes_hirsuta1.jpg'),
                require('../assets/trametes_hirsuta2.png')
            ]);
            setTips("o	This mushroom is best used as a flavoring agent due to its tough texture. o	Consider grinding it into a powder to add to soups or stews.");
        }
        else if (defectiveness === 'trametes_ochracea') {
            setName("Trametes ochracea (Ochre bracket fungus)");
            setEdible("Edible. This bracket fungus has a more delicate texture than Trametes hirsuta.");
            setDisc("This bracket fungus has a lighter brown or ochre-colored console-shaped cap with a smoother surface than Trametes hirsuta. It grows on dead trees.");
            setImg([
                require('../assets/trametes_ochracea1.jpg'),
                require('../assets/trametes_ochracea2.jpg')
            ]);
            setTips("o	The smoother texture of Trametes ochracea makes it more versatile for cooking than Trametes hirsuta. o	It can be enjoyed in various dishes like stir - fries or roasted.");
        }
        else if (defectiveness === 'trametes_versicolor') {
            setName("Trametes versicolor (Turkey tail)");
            setEdible("Edible, but some may find it bitter.");
            setDisc("This colorful bracket fungus has a fan-shaped cap with multicolored bands of yellow, orange, red, brown, and white. It grows on dead trees.");
            setImg([
                require('../assets/trametes_versicolor1.jpg'),
                require('../assets/trametes_versicolor2.png')
            ]);
            setTips("o	The bitterness of Turkey tail can be reduced by soaking or parboiling before cooking. o	It is more commonly used for its potential health benefits than for its culinary value");
        }
    }, [defectiveness]);

    const handleHomeButton = () => {
        navigation.navigate('Home');
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image style={styles.image} source={{ uri: capturedImageUri }} />
            <Text style={styles.capText}>Here the suggested Mushroom species.</Text>
            <Text style={styles.type}>Edible or poisonous : {edibility} {'\n'}"{Edible}"</Text>
            <Text style={styles.cname}>Common Name : {Pname}</Text>
            <Text style={styles.cname}>Description : {disc}</Text>
            {img.map((img, index) => (
                <Image key={index} source={img} style={{ width: 200, height: 200 }} />
            ))}
            <Text></Text>
            {warn === "" ? (<Text style={styles.cname}><Text style={{ color: 'blue' }}>Tips: </Text>: {tips}</Text>
            ) :
                (<Text style={styles.cname}><Text style={{ color: 'red' }}>Warning </Text>: {warn}</Text>
                )}
            <Text></Text>
            <TouchableOpacity style={styles.home} onPress={handleHomeButton}>
                <Text style={styles.homeText}>Home Page</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#FFFFFF',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingVertical: 20,
    },
    image: {
        width: 250,
        height: 300,
    },
    capText: {
        fontSize: 20,
        fontWeight: '600',
        textAlign: 'center'
    },
    home: {
        marginTop: 'auto',
        backgroundColor: "#00D972",
        borderRadius: 10,
        height: 40,
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    homeText: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#FFFF'
    },
    type: {
        marginTop: 10,
        fontSize: 15,
        fontWeight: '600',
        textAlign: 'auto',
        // left: '3%',

    },
    cname: {
        marginTop: 10,
        fontSize: 15,
        fontWeight: '600'
    },
});

export default MushroomDesc;
