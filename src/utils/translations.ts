// translations.ts
// Lightweight translations object keyed by language code.
// Each language contains UI labels and a `motivation` object with arrays used
// to display short, randomized motivational phrases based on progress.
export const translations = {
  ua: {
    title: "Мій список справ",
    placeholder: "Що потрібно зробити?",
    addButton: "Додати",
    confirmTitle: "Підтвердження",
    confirmMessage: "Видалити всі справи?",
    confirmYes: "Так",
    confirmNo: "Ні",
    progressLabel: "Прогрес",
    clearAll: "Очистити все",
    emptyList: "Список порожній. Додай першу задачу! ✨",
    motivation: {
      zero: ["Початок — це вже половина справи! 🚀", "Твій список чекає на перший успіх. Вперед! 💪"],
      step1: ["Перша пішла! Початок покладено! ✨", "Крига рушила! Так тримати! 🧊"],
      step2: ["Впевнений старт! Рухаєшся в гарному темпі! 🔥", "Ти вже розігрівся! Не зупиняйся! ⚡"],
      step3: ["Майже третина позаду! Ти продуктивний! 📈", "Гарна робота! Процес іде на повну! 🌟"],
      half: ["Екватор! Він вже тут! 🌓", "Половина шляху пройдена. Ти молодець! 🏆"],
      step5: ["Більша частина зроблена! Ти на висоті! 🏔️", "Ти вже бачиш фініш десь там вдалечині! 🔭"],
      step6: ["Залишилось зовсім трішки! Тисни на газ! 🏎️", "Твій прогрес вражає! Майже все! 💎"],
      final: ["Останні штрихи! Ти на фінішній прямій! 🏁", "Залишився один ривок! Давай! 🥇"],
      done: ["Місія виконана! Ти сьогодні найкращий! 🎉", "Все готово! Час для заслуженого релаксу! ☕"]
    },
    inputEmptErrMess: "Поле не може бути порожнім."
  },
  en: {
    title: "My Todo List",
    placeholder: "What needs to be done?",
    addButton: "Add",
    confirmTitle: "Confirm",
    confirmMessage: "Delete all tasks?",
    confirmYes: "Yes",
    confirmNo: "No",
    progressLabel: "Progress",
    clearAll: "Clear all",
    emptyList: "List is empty. Add your first task! ✨",
    motivation: {
      zero: ["Starting is half the battle! 🚀", "Your list is waiting for its first success. Go! 💪"],
      step1: ["First one down! A great start! ✨", "The ice is broken! Keep it up! 🧊"],
      step2: ["Confident start! Moving at a good pace! 🔥", "You're warmed up! Don't stop! ⚡"],
      step3: ["Almost a third done! You're productive! 📈", "Good job! The process is in full swing! 🌟"],
      half: ["Equator! You're halfway there! 🌓", "Half the way is done. Well done! 🏆"],
      step5: ["Most of it is done! You're on top! 🏔️", "You can already see the finish line! 🔭"],
      step6: ["Just a little bit left! Step on it! 🏎️", "Your progress is amazing! Almost there! 💎"],
      final: ["Final touches! You're on the home stretch! 🏁", "One last push! Come on! 🥇"],
      done: ["Mission accomplished! You're the best today! 🎉", "All done! Time for some well-deserved rest! ☕"]
    },
    inputEmptErrMess: "Input cannot be empty."
  }
};

export type Language = 'ua' | 'en';