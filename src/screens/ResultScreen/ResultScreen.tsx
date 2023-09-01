'use client';

import React from 'react';

import { AnimationBg } from '@/components/AnimationBg';
import { useGame } from '@/providers/GameProvider';
import { useStackNavigator } from '@/providers/NavigatorProvider';

import DiscordIcon from '@/assets/icons/discord.svg?inline';
import TelegramIcon from '@/assets/icons/telegram.svg?inline';
import XIcon from '@/assets/icons/x(twitter).svg?inline';

import styles from './ResultScreen.module.scss';

interface ResultScreenProps {
  className?: string;
}

export const ResultScreen: React.FC<ResultScreenProps> = () => {
  const { navigateTo } = useStackNavigator();
  const { getGameInstance } = useGame();

  const handleRestart = () => {
    const game = getGameInstance();

    game.restart();

    navigateTo('GameScreen');
  };

  return (
    <section className={styles.root}>
      <AnimationBg className={styles.bg} />
      <div className={styles.container}>
        <h1 className={styles.title}>Is that all you’ve got?</h1>
        <div className={styles.stats}>
          <div className={styles.statsItem}>
            <span className={styles.statsValue}>
              {getGameInstance().getState().txCount}
            </span>
            <span className={styles.statsCaption}>Transactions sent</span>
          </div>
          <div className={styles.statsItem}>
            <span className={styles.statsValue}>20s</span>
            <span className={styles.statsCaption}>Session duration</span>
          </div>
        </div>

        <p className={styles.caption}>Try again to get a higher score.</p>

        <div className={styles.btnGroup}>
          <button className={styles.shareBtn} onClick={handleRestart}>
            Start new game
          </button>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.socials}>
          <a
            className={styles.socialLink}
            href="https://twitter.com/burnt_"
            target="_blank"
          >
            <XIcon className={styles.socialIcon} />
          </a>
          <a
            className={styles.socialLink}
            href="https://discord.com/invite/burnt"
            target="_blank"
          >
            <DiscordIcon className={styles.socialIcon} />
          </a>
          <a
            className={styles.socialLink}
            href="https://t.me/xion_announcements"
            target="_blank"
          >
            <TelegramIcon className={styles.socialIcon} />
          </a>
          <a
            className={styles.socialLink}
            href="https://xion.burnt.com"
            target="_blank"
          >
            Join Us
          </a>
        </div>
      </div>
    </section>
  );
};