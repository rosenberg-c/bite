const rules = new Intl.PluralRules("en");

type Forms = Record<Extract<Intl.LDMLPluralRule, "one" | "other">, string>;

export function formatCount(count: number, forms: Forms): string {
  const category = rules.select(count);

  return `${count} ${category === "one" ? forms.one : forms.other}`;
}
