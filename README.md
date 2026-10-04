# 🚀 Barotrauma C# Plugin DevHub

Интерактивное руководство и примеры разработки C#-плагинов для **Barotrauma** (.NET 8 / FakeFish Plugin System).

## 🌐 Онлайн-версия документации
👉 **[Открыть гайд онлайн](https://voron2272.github.io/Barotrauma-Plugin-Guide/)**

---

## 📌 Что внутри гайда:
- **Быстрый старт**: требования (.NET 8 SDK, Visual Studio / Rider), клонирование шаблона, настройка `.props`.
- **Архитектура**: разделение на Client, Server и Shared код.
- **Манифесты**: настройка `filelist.xml` и `PluginInfo.xml`.
- **Жизненный цикл**: `IBarotraumaPlugin` (`Init`, `OnContentLoaded`, `Dispose`) и предотвращение утечек памяти при выгрузке.
- **8 практических примеров**:
  1. Кастомные `ItemComponent` с физикой и свойствами `[Serialize]`.
  2. Кастомные действия статус-эффектов (`IStatusEffectAction`).
  3. Типобезопасная сеть между клиентом и сервером (`IGameNetwork`, `[NetworkSerialize]`).
  4. Настройки мода в интерфейсе игры (`ISettingsService`).
  5. Встроенные события игры (`ISimpleHookService`).
  6. Кастомные XML-префабы (`GenericPrefabFile<T>`).
  7. Патчинг через `HarmonyX`.
  8. Сохранение кастомных данных через `ExtraFields`.
- **Отладка и релиз**: Hot Reload (<kbd>Alt+F10</kbd>), мультиплатформенная сборка всех 6 проектов через `PluginToolbox`, чеклист для Steam Workshop.

---

### Официальные репозитории разработчиков игры:
- [FakeFishGames/BaseBaroPlugin](https://github.com/FakeFishGames/BaseBaroPlugin)
- [FakeFishGames/ExamplesBaroPlugin](https://github.com/FakeFishGames/ExamplesBaroPlugin)
