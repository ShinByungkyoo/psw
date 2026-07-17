import { PortalLink, Pledge, CareerItem } from './types';

export const PORTAL_LINKS: PortalLink[] = [
  {
    title: '여론동향',
    url: 'https://calm-dieffenbachia-f90b9e.netlify.app/',
    description: '국민과 당원들의 여론 추이를 수집·분석하여 승리를 위한 과학적인 캠페인 전략을 구축합니다.',
    iconName: 'TrendingUp',
    badgeText: '실시간 분석',
    accentColor: '#3B82F6', // Blue
  },
  {
    title: '검색어 동향',
    url: 'https://keyword-trends-sage.vercel.app/',
    description: '주요 검색량 변화와 미디어 트렌드를 모니터링하여 여론의 즉각적인 흐름에 기민하게 대응합니다.',
    iconName: 'Search',
    badgeText: '트렌드 분석',
    accentColor: '#10B981', // Emerald
  },
  {
    title: '캠프 회의 자료',
    url: 'https://docs.google.com/document/d/1owiGB72dAIst50UUdJrMdWN3PA3O701Ud__ZwIqjlwM/edit?tab=t.0',
    description: '더불어민주당 최고위원 후보 박승원 캠프의 공식 회의 자료와 주요 논의 사항을 실시간으로 확인하실 수 있습니다.',
    iconName: 'FileText',
    badgeText: '회의록',
    accentColor: '#F59E0B', // Amber
  },
  {
    title: 'PSW 온라인 동향',
    url: 'https://docs.google.com/presentation/d/1WglCsEX9sNSc4Bb7LN5qmgqCinLMi44eYUd1tzrEjB0/edit?hl=ko&slide=id.g3f54981c16c_0_19#slide=id.g3f54981c16c_0_19',
    description: '박승원(PSW) 후보의 온라인 여론 동향 및 주요 관심 유입 키워드 브리핑 자료를 확인하실 수 있습니다.',
    iconName: 'ShieldCheck',
    badgeText: '동향 브리핑',
    accentColor: '#EF4444', // Red
  },
];

export const CAMPAIGN_PLEDGES: Pledge[] = [
  {
    id: 1,
    title: '자치분권국가 개헌',
    subtitle: '헌법 개정을 통한 진정한 자치와 권한 분산 구현',
    details: [
      '대한민국 헌법 제1조에 자치분권국가 지향 명시',
      '지방정부의 자치입법권, 자치행정권, 자치재정권의 실질적 헌법 보장',
      '중앙정부의 비대화된 권한을 지역으로 이양하여 지역 소멸 극복 및 국토 균형발전 기틀 마련',
      '시민의 직접참여권 강화 및 주민자치회 법제화를 통한 상향식 민주주의 구현'
    ],
    iconName: 'Award',
    colorClass: 'from-blue-500/20 to-blue-600/5 hover:border-blue-500/50'
  },
  {
    id: 2,
    title: '지방재정확대 (6:4)',
    subtitle: '국세와 지방세 비율을 6대 4로 조정하여 지역 재정 주권 확립',
    details: [
      '현재 약 7.5 대 2.5 수준인 국세-지방세 구조를 중장기적으로 6대 4까지 획기적 개편',
      '지방교부세율 인상 및 지역 자율 재량 재원의 절대적 확보 보장',
      '지역 간의 재정 격차 완화를 위한 재정균형장치(수평적 재정조정제도) 고도화',
      '중앙 사업의 지방 이양 시 100% 예산 보장을 통한 무상 복지·지방 부담 해소'
    ],
    iconName: 'DollarSign',
    colorClass: 'from-emerald-500/20 to-emerald-600/5 hover:border-emerald-500/50'
  },
  {
    id: 3,
    title: '당원 중심 단단한 민주당',
    subtitle: '주권당원 중심의 소통 플랫폼과 아래로부터의 정당 개혁',
    details: [
      '당원들이 정당 의사결정에 실질적으로 참여할 수 있는 ‘당원 주권 전담 부서’ 강화',
      '지역위원회 중심의 상시적 민주 토론 광장 개설 및 모바일 플랫폼 확대 개편',
      '당원 기본 교육 및 지방자치 인재 아카데미 상설 운영을 통한 당내 역량 제고',
      '정치 신인과 청년·여성이 주도적으로 참여할 수 있는 당내 공천·활동 장벽 혁파'
    ],
    iconName: 'Users',
    colorClass: 'from-amber-500/20 to-amber-600/5 hover:border-amber-500/50'
  },
  {
    id: 4,
    title: '지방의회법 제정',
    subtitle: '지방의회의 온전한 독립과 견제·감사 능력 독립화',
    details: [
      '국회법에 상응하는 독립적인 ‘지방의회법’ 제정으로 지방의회 위상 확립',
      '의회 조직권 및 예산 편성권의 독립 확보로 집행부에 대한 견제 권한 완벽 지원',
      '의원 1인당 정책지원 전문 인력(보좌관)의 완전 매칭 제도 추진',
      '지역 주민들과 소통하고 모니터링할 수 있는 상시 정보 공개 및 모바일 참관 인프라 확충'
    ],
    iconName: 'Scale',
    colorClass: 'from-purple-500/20 to-purple-600/5 hover:border-purple-500/50'
  },
  {
    id: 5,
    title: '대한민국 균형성장',
    subtitle: '지역 특화 혁신 산업 육성과 지속 가능한 지방 자립 생태계',
    details: [
      '초광역 메가시티 및 지역별 연합 지방정부 체계를 통한 국토 성장축의 다변화',
      '지역 대학-산업체 연계 일자리 창출 및 기회발전특구 세제 혜택 대폭 확대',
      '탄소중립 시대에 걸맞은 친환경 신재생에너지 자립 도시 표준 모델 전파',
      '지역 기반 문화·의료·교육 인프라 균형 배치 정책 입법 강력 전개'
    ],
    iconName: 'TrendingUp',
    colorClass: 'from-rose-500/20 to-rose-600/5 hover:border-rose-500/50'
  }
];

export const CAREER_LIST: CareerItem[] = [
  { type: 'current', text: '3선 광명시장 (민선 7기, 8기 최우수 자치단체장 평가)' },
  { type: 'current', text: '전국자치분권민주지도자회의 (KDLC) 상임대표' },
  { type: 'past', text: '더불어민주당 참좋은지방정부위원회 위원장' },
  { type: 'past', text: '전국시장군수구청장협의회 공동대표' },
  { type: 'past', text: '경기도의회 더불어민주당 대표의원 (교섭단체 이끌며 자치분권 전력 투구)' },
  { type: 'past', text: '대통령직속 국가교육회의 위원' },
  { type: 'past', text: '자치분권 최고위원의 강력한 적임자' }
];

export const PRESET_CHEERS = [
  '자치분권의 참일꾼 박승원 시장님의 최고위원 도전을 뜨겁게 응원합니다! 🔥',
  '풀뿌리 민주주의의 희망, 지방재정 6:4 법제화를 박승원 후보가 꼭 해내주십시오!',
  '언제나 당원들과 소통하며 민주당을 단단하게 만들어주시는 리더십을 지지합니다. 💙',
  '광명시를 변화시킨 그 저력으로 대한민국 지방자치 역사를 새로 써주시길 바랍니다!',
  '진정한 지방시대의 개막! 자치분권 최고위원은 오직 박승원뿐입니다. 파이팅!',
  '행정 전문가, 현장 전문가 박승원 후보가 민주당의 중심에서 목소리를 내야 합니다!'
];
