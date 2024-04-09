import React from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import ecoSmall from '../../Assets/eco-small.jpg';
import whatsapp from '../../Assets/whatsapp.png';
import call from '../../Assets/call.png';

function CardDetails() {

  return (

    <TouchableOpacity>
      <View style={{ flexDirection: 'row', backgroundColor: '#ffff', padding: 10, margin: 15,
        borderRadius: 4, borderLeftColor:'#37745C', borderLeftWidth:4 }}>

        {/* Image Section */}
        <View style={{ width: 110, height: 100, alignItems: 'center', marginTop: 8, borderRadius: 4 }}>
          <Image style={{ width: 100, height: 80, borderRadius: 4, marginTop: 10 }}
            source={ecoSmall} />
        </View>

        {/* Text Section */}
        <View style={{ flex: 1, paddingLeft: 15 }}>
          <Text style={{ fontWeight: '900', marginTop: 8, fontSize: 20, color: '#37745C' }}>
            La Mosteiro
          </Text>
          <Text style={{ marginTop: 4, color: '#37745C' }}>
            Price : 300$
          </Text>
          <Text style={{ marginTop: 4, marginLeft: 2, color: '#37745C' }}>
            4.0 * * * *
          </Text>
          <Text style={{ marginTop: 4, marginLeft: 2, color: '#37745C' }}>
            Read More
          </Text>
        </View>

        {/* Start Icon Section */}
        <View style={{ padding: 20 }}>
          <TouchableOpacity>
            <Image style={{ width: 25, height: 24, marginTop: 0, tintColor: '#37745C' }}
              source={call} />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image style={{ width: 25, height: 24, marginTop: 15, tintColor: '#37745C' }}
              source={whatsapp} />
          </TouchableOpacity>
        </View>
        {/* End Icon Section */}

      </View>
    </TouchableOpacity>
  );
}

export default CardDetails;
