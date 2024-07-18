// import React, { useState, useEffect } from "react";
// import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
// import Modal from "react-native-modal";
// import { COLOR } from "../constant/styles";

// const CommonAlert = (props) => {
//   const [okButtonText, setOkButtonText] = useState(props.okButton);
//   const [cancelButtonText, setCancelButtonText] = useState(props.cancelButton);
//   const [alertModal, setAlertModal] = useState(true);
//   const [text, setText] = useState(props.textContent);

//   useEffect(() => {
//     setOkButtonText(props.okButton);
//     setCancelButtonText(props.cancelButton);
//     setAlertModal(true);
//     setText(props.textContent);
//   }, [props.okButton, props.cancelButton, props.alertModal, props.textContent]);

//   const handleCancel = () => {
//     props.cancelCallBack();
//   };

//   const handleDone = () => {
//     props.doneCallback();
//   };

//   return (
//     <Modal
//       animationIn="slideInUp"
//       coverScreen={false}
//       transparent={true}
//       animationInTiming={300}
//       animationOut="slideOutDown"
//       animationOutTiming={300}
//       isVisible={true}
//       style={{
//         height: 150,
//         backgroundColor: "transparent",
//         alignItems: "center",
//       }}
//     >
//       <View
//         style={{
//           backgroundColor: Styles.COLOR_FFFFFF,
//           width: "90%",
//           height: 216,
//           borderRadius: 10,
//           alignItems: "center",
//           overflow: "hidden",
//         }}
//       >
//         <Image
//           style={{
//             alignSelf: "center",
//             marginTop: 21,
//             fontSize: 20,
//             height: 54,
//             width: 54,
//             fontWeight: "700",
//             color: Styles.COLOR_000000,
//             // fontFamily: Styles.PLUSJAKARTASANS_REGULAR,
//           }}
//           source={require("../assets/images/decathelon.png")}
//         />
//         <Text
//           style={{
//             textAlign: "center",
//             fontSize: 20,
//             color: COLOR.D000000,
//             // fontFamily: Styles.URBANIST_BOLD,
//             marginTop: 15,
//           }}
//         >
//           {`You have uploaded the\n wrong documents`}
//         </Text>

//         <View
//           style={{
//             flexDirection: "row",
//             justifyContent: "space-between",
//             width: "50%",
//             marginTop: 26,
//           }}
//         >
//           <TouchableOpacity
//             style={[
//               styles.buttonStyle,
//               {
//                 backgroundColor: COLOR.DFFFFFF,
//                 width: 72,
//                 height: 32,
//                 borderRadius: 5,
//                 marginBottom: 0,
//                 marginTop: 0,
//                 borderWidth: 1,
//               },
//             ]}
//           >
//             <Text
//               style={[
//                 styles.buttonText,
//                 {
//                   color: COLOR.DFFFFFF,
//                   // fontFamily: Styles.PLUSJAKARTASANS_SEMIBOLD,
//                 },
//               ]}
//             >
//               {`Cancel`}
//             </Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={[
//               styles.buttonStyle,
//               {
//                 // backgroundColor: Styles.COLOR_FFB83F,
//                 width: 79,
//                 height: 32,
//                 borderRadius: 5,
//                 marginBottom: 0,
//                 marginTop: 0,
//               },
//             ]}
//           >
//             <Text
//               style={[
//                 styles.buttonText,
//                 {
//                   color: COLOR.DFFFFFF,
//                   // fontFamily: Styles.PLUSJAKARTASANS_SEMIBOLD,
//                 },
//               ]}
//             >
//               {`Re-Upload`}
//             </Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </Modal>
//   );
// };

// const styles = StyleSheet.create({
//   buttonStyle: {
//     // backgroundColor: Styles.COLOR_FFB83F,
//     marginTop: 10,
//     borderRadius: 10,
//     height: 50,
//     marginBottom: 10,
//     width: "100%",
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   buttonText: {
//     fontSize: 12,
//     color: COLOR.DFFFFFF,
//     fontWeight: "700",
//     // fontFamily: Styles.PLUSJAKARTASANS_REGULAR,
//   },
// });

// export default CommonAlert;

import React from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView } from 'react-native';
import { useSelector } from 'react-redux';

const Sports = () => {
  const sportsItems = useSelector((state) => state.sports.items);

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <FlatList
          data={sportsItems}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.title}>{item.name}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
          )}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  item: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#555',
  },
});

export default Sports;

