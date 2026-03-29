/**
 * Common Tailwind class name strings to avoid hardcoding repeated combinations.
 * Use with: className={STYLES.sectionPadding} or className={cn(STYLES.container, props.className)}
 */
export const STYLES = {
  /** Section with standard vertical padding (py-11, 2xl:py-20) */
  sectionPadding: "2xl:py-20 py-11",
  /** Section with large vertical padding */
  sectionPaddingLg: "2xl:py-20 py-10",
  /** Standard container */
  container: "container",
  /** Flex column, centered items */
  flexColCenter: "flex flex-col items-center justify-center",
  /** Flex column, gap */
  flexColGap: "flex flex-col gap-8",
  /** Centered text */
  textCenter: "text-center",
  /** Muted text (dark_black/60, white/60 in dark) */
  textMuted: "text-dark_black/60 dark:text-white/60",
  /** Instrument Serif font */
  instrumentFont: "instrument-font",
  /** Hero background blur area */
  heroBlur:
    "before:absolute before:w-full before:h-full before:bg-linear-to-r before:from-blue_gradient before:via-white before:to-yellow_gradient before:rounded-full before:top-24 before:blur-3xl before:-z-10 dark:before:from-dark_blue_gradient dark:before:via-black dark:before:to-dark_yellow_gradient dark:before:rounded-full dark:before:blur-3xl dark:before:-z-10",
  /** Primary CTA button */
  btnPrimary:
    "group bg-purple_blue text-white font-medium flex flex-row justify-between items-center py-2 px-5 rounded-full max-w-64 w-full md:py-3 border border-purple_blue transition-all duration-200 ease-in-out hover:bg-transparent hover:text-purple_blue",
} as const;
