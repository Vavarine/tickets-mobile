import Storage from "react-native-storage";
import AsyncStorage from "@react-native-async-storage/async-storage";

const storage = new Storage({
  storageBackend: AsyncStorage,
  defaultExpires: 1000 * 3600 * 24 * 30,
});

export default storage;
