[keyple-plugin-android-nfc](../../index.md) / [org.eclipse.keyple.plugin.android.nfc](../index.md) / [AndroidNfcProtocolSettings](./index.md)

# AndroidNfcProtocolSettings

`object AndroidNfcProtocolSettings`

This class contains all the parameters to identify the communication protocols supported by NFC
readers.

The application can choose to add all parameters or only a subset.

### Functions

| [getSetting](get-setting.md) | Associates a protocol and a string defining how to identify it (here a regex to be applied on the ATR)`fun getSetting(seProtocol: SeProtocol): `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html) |
| [getSpecificSettings](get-specific-settings.md) | Return a subset of the settings map`fun getSpecificSettings(specificProtocols: `[`EnumSet`](https://docs.oracle.com/javase/6/docs/api/java/util/EnumSet.html)`<SeCommonProtocols>): `[`Map`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-map/index.html)`<SeProtocol, `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`>` |

