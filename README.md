
# react-native-cz-inputtext

## Getting started

`$ npm install react-native-cz-inputtext --save`

### Mostly automatic installation

`$ react-native link react-native-cz-inputtext`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-cz-inputtext` and add `RNCzInputtext.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNCzInputtext.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.chenzhe.inputtext.RNCzInputtextPackage;` to the imports at the top of the file
  - Add `new RNCzInputtextPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-cz-inputtext'
  	project(':react-native-cz-inputtext').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-cz-inputtext/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-cz-inputtext')
  	```


## Usage
```javascript
import RNCzInputtext from 'react-native-cz-inputtext';

// TODO: What to do with the module?
RNCzInputtext;
```
  