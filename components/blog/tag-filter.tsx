import { Combobox } from "@base-ui/react/combobox"
import type { Tag } from "@/src/data/blog"

function XIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
      <path d="M2 2l6 6M8 2l-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export function TagFilter({
  tags,
  value,
  onValueChange,
}: {
  tags: Tag[]
  value: Tag[]
  onValueChange: (tags: Tag[]) => void
}) {
  const items = tags.map((tag) => ({ label: tag.name, value: tag.slug }))
  const selected = value.map((tag) => ({ label: tag.name, value: tag.slug }))

  return (
    <Combobox.Root
      items={items}
      multiple
      value={selected}
      onValueChange={(next) =>
        onValueChange(next.map((item) => tags.find((tag) => tag.slug === item.value)!).filter(Boolean))
      }
      isItemEqualToValue={(a, b) => a.value === b.value}
    >
      <Combobox.InputGroup className="flex min-h-9 w-full flex-wrap items-center gap-1 rounded-md border border-border bg-card px-2 py-1 has-[button]:px-1.5 focus-within:border-ring focus-within:ring-3 focus-within:ring-ring/50">
        <Combobox.Chips className="flex w-full flex-wrap items-center gap-1">
          <Combobox.Value>
            {(chips: { label: string; value: string }[]) => (
              <>
                {chips.map((chip) => (
                  <Combobox.Chip
                    key={chip.value}
                    aria-label={chip.label}
                    className="group flex h-6 items-center gap-1 rounded-full border border-accent/15 bg-teal-subtle py-0 pr-1 pl-2 text-xs font-medium text-accent outline-none data-highlighted:bg-accent/20"
                  >
                    {chip.label}
                    <Combobox.ChipRemove
                      aria-label={`Remove ${chip.label}`}
                      className="flex size-4 items-center justify-center rounded-full text-accent/70 hover:bg-accent/20 hover:text-accent"
                    >
                      <XIcon />
                    </Combobox.ChipRemove>
                  </Combobox.Chip>
                ))}
                <Combobox.Input
                  placeholder={chips.length > 0 ? "" : "Filter by tag…"}
                  className="h-6 min-w-24 flex-1 border-0 bg-transparent p-0 text-sm text-foreground outline-none placeholder:text-muted-foreground"
                />
              </>
            )}
          </Combobox.Value>
        </Combobox.Chips>
      </Combobox.InputGroup>

      <Combobox.Portal>
        <Combobox.Positioner className="z-50 outline-none" sideOffset={6}>
          <Combobox.Popup className="w-[var(--anchor-width)] max-h-[min(var(--available-height),18rem)] overflow-y-auto rounded-md border border-border bg-card p-1 text-foreground shadow-md outline-none">
            <Combobox.Empty className="px-3 py-2 text-sm text-muted-foreground">
              No matching tags.
            </Combobox.Empty>
            <Combobox.List>
              {(item: { label: string; value: string }) => (
                <Combobox.Item
                  key={item.value}
                  value={item}
                  className="cursor-default rounded-sm px-3 py-1.5 text-sm outline-none select-none data-highlighted:bg-muted"
                >
                  {item.label}
                </Combobox.Item>
              )}
            </Combobox.List>
          </Combobox.Popup>
        </Combobox.Positioner>
      </Combobox.Portal>
    </Combobox.Root>
  )
}
