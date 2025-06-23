# RNCustomModal

The rn-custom-modal package provides a customizable and reusable CustomModal component for React Native applications. Designed to simplify the creation of modal-based bottom sheets, it offers a clean and flexible way to display prompts, menus, actions, and other modal content in your app.

# RNCustomModal Example

## Installation

Download the package with npm or yarn

```sh
# Using npm
npm i rn-custom-modal

```

## Usage

```js
  import CustomModal from "rn-custom-modal";
```

```jsx
  const [isVisible, setIsVisible] = useState(false);

  const handleOpenModal = () => setIsVisible(true);

  const handleCloseModal = () => setIsVisible(false);

  <Text onPress={handleOpenModal}>Open Custom Modal</Text>

   <CustomModal
      title="Sheet Title"
      isModalVisible={isVisible}
      onCloseModal={handleCloseModal}
      showCloseButton={true}
      renderModalContent={() => (
          <View style={{ paddingVertical: 20 }}>
            <Text style={{ fontSize: 16, textAlign: 'center' }}>
              This is your modal content.
            </Text>
            <Button title="Close" onPress={handleCloseModal} />
          </View>
        )}
    />
```
     Example with custom header 

```jsx
      const CustomHeader = () => {
        return (
          <TextInput
            placeholder="Enter something..."
            style={{
              height: 30,
              borderWidth: 1,
              borderColor: '#ccc',
              borderRadius: 8,
              paddingHorizontal: 10,
            }}
          />
        );
      };

      <CustomModal
        sheetCustomHeader={<CustomHeader />}
        isModalVisible={isVisible}
        onCloseModal={handleCloseModal}
        showCloseButton={true}
        renderModalContent={() => (
          <View style={{ paddingVertical: 20 }}>
            <Text style={{ fontSize: 16, textAlign: 'center' }}>
              This is your modal content.
            </Text>
            <Button title="Close" onPress={handleCloseModal} />
          </View>
        )}
      /> 
  ```


## Props

All the `Modal` props can be passed.

| **Prop**             | **Type**                                 | **Default**               | **Required** | **Description**                                                                |
|----------------------|------------------------------------------|---------------------------|--------------|--------------------------------------------------------------------------------|
| `isModalVisible`     | `boolean`                                | `false`                   |  Yes         | Controls the visibility of the modal.                                          |
| `onCloseModal`       | `() => void`                             | `() => {}`                |  Yes         | Called when the modal or backdrop is pressed to close.                         |
| `title`              | `string`                                 | `'Provide Sheet Title'`   |  No          | Title to show at the top of the modal. Ignored if `sheetCustomHeader` is used. |
| `containerStyle`     | `StyleProp<ViewStyle>`                   | `{}`                      |  No          | Custom style for the inner modal sheet container.                              |
| `backdropStyle`      | `StyleProp<ViewStyle>`                   | `{}`                      |  No          | Style applied to the semi-transparent backdrop.                                |
| `animationType`      | `'none'` | `'slide'` | `'fade'`          | `'slide'`                 |  No          | Type of animation for the modal appearance.                                    |
| `showCloseButton`    | `boolean`                                | `true`                    |  No          | Show or hide the close (X) icon in the modal header.                           |
| `closeIconImage`     | `ImageSourcePropType`                    | `close_icon.png`          |  No          | Custom image source for the close icon.                                        |
| `SheetHeaderStyle`   | `StyleProp<ViewStyle>`                   | `{}`                      |  No          | Style for the header container (title and close icon row).                     |
| `titleStyle`         | `StyleProp<TextStyle>`                   | `{}`                      |  No          | Style for the title text inside the modal.                                     |
| `sheetCustomHeader`  | `ReactNode`                              | `null`                    |  No          | Fully override the default header with a custom component.                     |
| `renderModalContent` | `() => ReactNode`                        | `() => null`              |  No          | Function that returns the content rendered inside the modal body.              |




